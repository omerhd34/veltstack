/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  forwardRef,
  useMemo,
  useCallback,
  type ReactNode,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useDragScroll } from "@/components/hooks/use-drag-scroll";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export interface FeatureItem {
  id?: string;
  title: string;
  description: string;
  image?: string;
  tag?: string;
  href?: string;
  index?: number;
  coverGradient?: string;
}

export interface ScrollCarouselNavLabels {
  prev: string;
  next: string;
}

export interface ScrollCarouselProps {
  features: FeatureItem[];
  className?: string;
  maxScrollHeight?: number;
  hideSecondRow?: boolean;
  containerClassName?: string;
  cardClassName?: string;
  progressBarClassName?: string;
  renderFeature?: (feature: FeatureItem, index: number) => ReactNode;
  interactionMode?: "scroll-pin" | "drag";
  navLabels?: ScrollCarouselNavLabels;
  alignStart?: boolean;
  columnsPerView?: 1 | 2;
  viewportClassName?: string;
  loop?: boolean;
  progressStyle?: "bar" | "pages" | "none";
  navPlacement?: "inline" | "outside";
}

const useFeatureAnimations = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  scrollContainerRef: React.RefObject<HTMLDivElement | null>,
  scrollContainerRef2: React.RefObject<HTMLDivElement | null>,
  progressBarRef: React.RefObject<HTMLDivElement | null>,
  cardRefs: React.MutableRefObject<HTMLDivElement[]>,
  cardRefs2: React.MutableRefObject<HTMLDivElement[]>,
  isDesktop: boolean,
  featureCount: number,
  hideSecondRow: boolean,
  enabled: boolean,
  maxScrollHeight?: number,
) => {
  useLayoutEffect(() => {
    if (!enabled) return;

    const ctx = gsap.context(() => {
      if (isDesktop) {
        const scrollWidth1 = scrollContainerRef.current?.scrollWidth || 0;
        const scrollWidth2 = scrollContainerRef2.current?.scrollWidth || 0;
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const cardWidth = cardRefs.current[0]?.offsetWidth || 0;
        const viewportOffset = (containerWidth - cardWidth) / 2;

        const finalOffset1 = scrollWidth1 - containerWidth + viewportOffset;
        const finalOffset2 = scrollWidth2 - containerWidth + viewportOffset;
        const scrollDistance = maxScrollHeight || finalOffset1;

        if (!hideSecondRow && scrollContainerRef2.current) {
          gsap.set(scrollContainerRef2.current, {
            x: -finalOffset2 + viewportOffset * 2,
          });
        }

        gsap
          .timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: () => `+=${scrollDistance}`,
              scrub: 1,
              pin: true,
            },
          })
          .fromTo(
            scrollContainerRef.current,
            { x: viewportOffset },
            { x: -finalOffset1 + viewportOffset, ease: "none" },
          );

        if (!hideSecondRow && scrollContainerRef2.current) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${scrollDistance}`,
                scrub: 1,
              },
            })
            .to(scrollContainerRef2.current, {
              x: viewportOffset,
              ease: "none",
            });
        }

        gsap.to(progressBarRef.current, {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            scrub: true,
          },
        });
      } else {
        const allCards = hideSecondRow
          ? cardRefs.current
          : [...cardRefs.current, ...cardRefs2.current];

        allCards.forEach((card, index) => {
          if (!card) return;

          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: index % 2 === 0 ? -200 : 200,
            },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
              },
            },
          );
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop, maxScrollHeight, featureCount, hideSecondRow, enabled]);
};

export const ScrollCarousel = forwardRef<HTMLDivElement, ScrollCarouselProps>(
  (
    {
      features,
      className,
      maxScrollHeight,
      hideSecondRow = false,
      containerClassName,
      cardClassName,
      progressBarClassName,
      renderFeature,
      interactionMode = "scroll-pin",
      navLabels = { prev: "Previous", next: "Next" },
      alignStart = false,
      columnsPerView = 1,
      viewportClassName,
      loop = false,
      progressStyle = "bar",
      navPlacement = "inline",
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const viewportRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef2 = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<HTMLDivElement[]>([]);
    const cardRefs2 = useRef<HTMLDivElement[]>([]);
    const [isDesktop, setIsDesktop] = useState(false);
    const [dragProgress, setDragProgress] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const [pageIndicator, setPageIndicator] = useState({
      current: 1,
      total: 1,
    });

    const isDragMode = interactionMode === "drag";
    const { handleClickCapture } = useDragScroll(viewportRef, {
      enabled: isDragMode,
    });

    const features2 = useMemo(
      () => (hideSecondRow ? [] : [...features].slice().reverse()),
      [features, hideSecondRow],
    );

    useEffect(() => {
      const checkDesktop = () => {
        setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
      };

      checkDesktop();
      window.addEventListener("resize", checkDesktop);
      return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    useFeatureAnimations(
      containerRef,
      scrollContainerRef,
      scrollContainerRef2,
      progressBarRef,
      cardRefs,
      cardRefs2,
      isDesktop,
      features.length,
      hideSecondRow,
      !isDragMode,
      maxScrollHeight,
    );

    const updateScrollIndicator = useCallback(() => {
      const viewport = viewportRef.current;
      const firstCard = cardRefs.current[0];
      const track = scrollContainerRef.current;
      if (!viewport) return;

      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      const progress = maxScroll > 0 ? viewport.scrollLeft / maxScroll : 0;
      setDragProgress(progress);

      if (!firstCard) {
        setPageIndicator({ current: 1, total: 1 });
        return;
      }

      const gap = track
        ? Number.parseFloat(getComputedStyle(track).gap) || 32
        : 32;
      const pageSize =
        columnsPerView === 2 && window.matchMedia("(min-width: 768px)").matches
          ? 2
          : 1;
      const totalPages = Math.max(1, Math.ceil(features.length / pageSize));
      const pageStep = (firstCard.offsetWidth + gap) * pageSize;
      const edgeThreshold = 8;

      let currentPage = 1;
      if (pageStep > 0) {
        if (maxScroll > 0 && viewport.scrollLeft >= maxScroll - edgeThreshold) {
          currentPage = totalPages;
        } else {
          currentPage = Math.min(
            totalPages,
            Math.max(1, Math.round(viewport.scrollLeft / pageStep) + 1),
          );
        }
      }

      setPageIndicator({ current: currentPage, total: totalPages });
    }, [columnsPerView, features.length]);

    useEffect(() => {
      if (!isDragMode) return;

      const viewport = viewportRef.current;
      if (!viewport) return;

      updateScrollIndicator();

      viewport.addEventListener("scroll", updateScrollIndicator, {
        passive: true,
      });
      window.addEventListener("resize", updateScrollIndicator);

      return () => {
        viewport.removeEventListener("scroll", updateScrollIndicator);
        window.removeEventListener("resize", updateScrollIndicator);
      };
    }, [isDragMode, updateScrollIndicator, features.length, slideWidth]);

    useLayoutEffect(() => {
      if (!isDragMode || columnsPerView !== 2) {
        setSlideWidth(0);
        return;
      }

      const measureSlideWidth = () => {
        const viewport = viewportRef.current;
        const track = scrollContainerRef.current;
        if (!viewport) return;

        const gap = track
          ? Number.parseFloat(getComputedStyle(track).gap) || 32
          : 32;
        const visibleColumns = window.matchMedia("(min-width: 768px)").matches
          ? 2
          : 1;
        const nextWidth = Math.floor(
          (viewport.clientWidth - gap * (visibleColumns - 1)) / visibleColumns,
        );

        setSlideWidth(nextWidth > 0 ? nextWidth : 0);
      };

      measureSlideWidth();

      const viewport = viewportRef.current;
      if (!viewport) return;

      const observer = new ResizeObserver(measureSlideWidth);
      observer.observe(viewport);
      window.addEventListener("resize", measureSlideWidth);

      return () => {
        observer.disconnect();
        window.removeEventListener("resize", measureSlideWidth);
      };
    }, [isDragMode, columnsPerView, features.length]);

    const scrollByCard = useCallback(
      (direction: -1 | 1) => {
        const viewport = viewportRef.current;
        const firstCard = cardRefs.current[0];
        const track = scrollContainerRef.current;
        if (!viewport || !firstCard) return;

        const gap = track
          ? Number.parseFloat(getComputedStyle(track).gap) || 32
          : 32;
        const pageSize =
          columnsPerView === 2 &&
          window.matchMedia("(min-width: 768px)").matches
            ? 2
            : 1;
        const step = (firstCard.offsetWidth + gap) * pageSize;
        const maxScroll = viewport.scrollWidth - viewport.clientWidth;
        const edgeThreshold = 8;

        if (loop && maxScroll > 0) {
          if (
            direction === 1 &&
            viewport.scrollLeft >= maxScroll - edgeThreshold
          ) {
            viewport.scrollTo({ left: 0, behavior: "smooth" });
            return;
          }

          if (direction === -1 && viewport.scrollLeft <= edgeThreshold) {
            viewport.scrollTo({ left: maxScroll, behavior: "smooth" });
            return;
          }
        }

        viewport.scrollBy({ left: direction * step, behavior: "smooth" });
      },
      [columnsPerView, loop],
    );

    const navOutside = navPlacement === "outside";

    const navButtonClass =
      "hidden size-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-35 md:flex";

    const navButtonOutsideClass = cn(
      navButtonClass,
      "absolute top-1/2 z-40 -translate-y-1/2",
    );

    const renderFeatureCards = (
      featureSet: FeatureItem[],
      refs: React.MutableRefObject<HTMLDivElement[]>,
      keyPrefix: string,
    ) =>
      featureSet.map((feature, index) => (
        <div
          key={feature.id ?? `${keyPrefix}-${index}`}
          ref={(el: HTMLDivElement | null) => {
            if (el) refs.current[index] = el;
          }}
          className={cn(
            "feature-card relative z-10 h-full shrink-0 snap-start snap-always transition-all duration-300 ease-in-out",
            isDragMode && columnsPerView === 2
              ? null
              : isDragMode
                ? cn(
                    "w-[min(88vw,480px)]",
                    alignStart ? "snap-start" : "snap-center",
                  )
                : "w-full md:w-[min(72vw,480px)]",
            cardClassName,
          )}
          style={
            isDragMode && columnsPerView === 2 && slideWidth > 0
              ? { width: slideWidth, flexBasis: slideWidth }
              : undefined
          }
        >
          {renderFeature ? (
            renderFeature(feature, index)
          ) : (
            <div
              className={cn(
                "relative my-4 flex h-full min-h-[min(520px,70vh)] items-center justify-center rounded-3xl border p-4 backdrop-blur-lg transition-all duration-300 lg:p-8",
                "text-black dark:text-white",
                "group-hover:scale-105 centered:scale-105",
              )}
            >
              {feature.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={feature.image}
                  alt=""
                  className="absolute inset-0 z-[-1] h-full w-full rounded-3xl object-cover"
                />
              ) : null}
              <div className="absolute inset-x-0 bottom-4 z-10 w-full px-4">
                <div className="flex h-full translate-y-4 flex-col justify-end text-center opacity-100 transition-all duration-300 ease-out">
                  <h3 className="mb-0 text-2xl font-bold text-white transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="mb-4 text-xs text-white opacity-60">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl transition-all duration-300 group-hover:bg-black/5 group-hover:blur-md dark:group-hover:bg-white/5 centered:bg-black/5 dark:centered:bg-white/5" />
            </div>
          )}
        </div>
      ));

    const progressWidth = isDragMode ? `${dragProgress * 100}%` : undefined;

    return (
      <div
        className={cn(
          "relative overflow-hidden bg-transparent text-foreground",
          className,
        )}
        ref={ref}
      >
        <div
          ref={containerRef}
          className={cn(
            "relative z-10 flex flex-col gap-0",
            isDragMode
              ? "overflow-visible py-4 md:py-6"
              : "overflow-hidden md:min-h-[80vh] md:py-16",
            !isDragMode &&
              "lg:mask-[linear-gradient(to_right,transparent_0,black_5%,black_95%,transparent_100%)]",
            containerClassName,
          )}
        >
          {isDragMode ? (
            <>
              <div className={cn("relative w-full", navOutside && "px-0")}>
                {navOutside ? (
                  <button
                    type="button"
                    onClick={() => scrollByCard(-1)}
                    aria-label={navLabels.prev}
                    className={cn(
                      navButtonOutsideClass,
                      "left-0 md:left-1 lg:left-[max(0.5rem,calc((100%-80rem)/2-5rem))]",
                    )}
                  >
                    <LuChevronLeft className="size-5" aria-hidden />
                  </button>
                ) : null}

                <div className={cn(navOutside && "mx-auto w-full max-w-7xl")}>
                  <div
                    className={cn(
                      !navOutside && "flex items-center gap-3 md:gap-4",
                    )}
                  >
                    {!navOutside ? (
                      <button
                        type="button"
                        onClick={() => scrollByCard(-1)}
                        aria-label={navLabels.prev}
                        className={navButtonClass}
                      >
                        <LuChevronLeft className="size-5" aria-hidden />
                      </button>
                    ) : null}

                    <div
                      ref={viewportRef}
                      onClickCapture={handleClickCapture}
                      className={cn(
                        "overflow-x-auto overflow-y-hidden",
                        "scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
                        "cursor-grab snap-x snap-mandatory",
                        navOutside || !(alignStart && columnsPerView === 1)
                          ? "w-full px-0"
                          : "min-w-0 flex-1 pl-[max(1rem,calc((100%-80rem)/2))] pr-4 md:pr-6",
                        !navOutside && "min-w-0 flex-1",
                        viewportClassName,
                      )}
                    >
                      <div
                        ref={scrollContainerRef}
                        className={cn(
                          "flex w-max flex-row items-stretch gap-6 md:gap-8",
                          columnsPerView === 2 &&
                            slideWidth === 0 &&
                            "invisible",
                        )}
                      >
                        {renderFeatureCards(features, cardRefs, "row-1")}
                      </div>
                    </div>

                    {!navOutside ? (
                      <button
                        type="button"
                        onClick={() => scrollByCard(1)}
                        aria-label={navLabels.next}
                        className={navButtonClass}
                      >
                        <LuChevronRight className="size-5" aria-hidden />
                      </button>
                    ) : null}
                  </div>
                </div>

                {navOutside ? (
                  <button
                    type="button"
                    onClick={() => scrollByCard(1)}
                    aria-label={navLabels.next}
                    className={cn(
                      navButtonOutsideClass,
                      "right-0 md:right-1 lg:right-[max(0.5rem,calc((100%-80rem)/2-5rem))]",
                    )}
                  >
                    <LuChevronRight className="size-5" aria-hidden />
                  </button>
                ) : null}
              </div>

              {features.length > 1 && progressStyle !== "none" ? (
                progressStyle === "pages" ? (
                  <p
                    className="mt-4 text-center text-sm font-medium tabular-nums tracking-wide text-white/45 md:mt-5"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {pageIndicator.current} / {pageIndicator.total}
                  </p>
                ) : (
                  <div
                    className={cn(
                      "mx-auto mt-4 h-1.5 w-48 overflow-hidden rounded-full md:mt-5",
                      progressBarClassName ?? "bg-white/20",
                    )}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-150"
                      style={{ width: `${dragProgress * 100}%` }}
                    >
                      <div className="animated-water h-full w-full" />
                    </div>
                  </div>
                )
              ) : null}
            </>
          ) : (
            <>
              <div
                ref={scrollContainerRef}
                className="flex h-full flex-col items-center gap-8 px-6 md:flex-row md:px-0"
              >
                {renderFeatureCards(features, cardRefs, "row-1")}
              </div>

              {!hideSecondRow && features2.length > 0 ? (
                <div
                  ref={scrollContainerRef2}
                  className="hidden h-full flex-col items-center gap-8 px-6 xl:flex xl:flex-row xl:px-0"
                >
                  {renderFeatureCards(features2, cardRefs2, "row-2")}
                </div>
              ) : null}
            </>
          )}

          {isDesktop && !isDragMode ? (
            <div
              className={cn(
                "absolute bottom-2 left-1/2 z-50 h-2 w-64 -translate-x-1/2 overflow-hidden rounded-full bg-white/20 md:bottom-6",
                progressBarClassName,
              )}
            >
              <div
                ref={isDragMode ? undefined : progressBarRef}
                className="relative h-full overflow-hidden rounded-full transition-all duration-150"
                style={{ width: progressWidth ?? "0%" }}
              >
                <div className="animated-water absolute inset-0" />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  },
);

ScrollCarousel.displayName = "ScrollCarousel";

export default ScrollCarousel;
