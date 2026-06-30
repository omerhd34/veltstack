"use client";

import {
  useRef,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/components/hooks/use-mobile";

export interface ThreeDCarouselItem {
  id: number | string;
}

interface ThreeDCarouselLabels {
  prev: string;
  next: string;
  dot: string;
  region?: string;
}

interface ThreeDCarouselRenderContext {
  isActive: boolean;
  onActivate: () => void;
  activateLabel: string;
}

interface ThreeDCarouselProps<T extends ThreeDCarouselItem> {
  items: T[];
  renderItem: (
    item: T,
    index: number,
    context: ThreeDCarouselRenderContext,
  ) => ReactNode;
  getSlideLabel?: (item: T) => string;
  formatSlideAnnouncement?: (
    label: string,
    current: number,
    total: number,
  ) => string;
  formatActivateLabel?: (label: string) => string;
  autoRotate?: boolean;
  rotateInterval?: number;
  theme?: "dark" | "light";
  className?: string;
  viewportClassName?: string;
  labels?: ThreeDCarouselLabels;
}

function ThreeDCarousel<T extends ThreeDCarouselItem>({
  items,
  renderItem,
  getSlideLabel,
  formatSlideAnnouncement,
  formatActivateLabel,
  autoRotate = true,
  rotateInterval = 5000,
  theme = "dark",
  className,
  viewportClassName,
  labels = {
    prev: "Previous",
    next: "Next",
    dot: "Slide",
  },
}: ThreeDCarouselProps<T>) {
  const [active, setActive] = useState(0);
  const [rotateEpoch, setRotateEpoch] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const isMobile = useIsMobile();
  const minSwipeDistance = 50;
  const dragStartX = useRef<number | null>(null);
  const dragEndX = useRef<number | null>(null);
  const dragIntentRef = useRef(false);
  const suppressClickRef = useRef(false);

  const selectSlide = useCallback((index: number) => {
    setActive(index);
    setRotateEpoch((epoch) => epoch + 1);
  }, []);

  const goPrev = useCallback(() => {
    selectSlide((active - 1 + items.length) % items.length);
  }, [active, items.length, selectSlide]);

  const goNext = useCallback(() => {
    selectSlide((active + 1) % items.length);
  }, [active, items.length, selectSlide]);

  useEffect(() => {
    if (!autoRotate || !isInView || isHovering || items.length <= 1) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [
    isInView,
    isHovering,
    autoRotate,
    rotateInterval,
    items.length,
    rotateEpoch,
  ]);

  useEffect(() => {
    const node = carouselRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const resetDrag = useCallback(() => {
    dragStartX.current = null;
    dragEndX.current = null;
    dragIntentRef.current = false;
    setIsDragging(false);
  }, []);

  const finishDrag = useCallback(
    (clientX: number) => {
      if (dragStartX.current == null) return;

      const distance = dragStartX.current - clientX;
      if (distance > minSwipeDistance) {
        suppressClickRef.current = true;
        goNext();
      } else if (distance < -minSwipeDistance) {
        suppressClickRef.current = true;
        goPrev();
      }

      resetDrag();
    },
    [goNext, goPrev, resetDrag],
  );

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (items.length <= 1 || e.button !== 0) return;
    if ((e.target as HTMLElement).closest("[data-carousel-control]")) return;

    dragStartX.current = e.clientX;
    dragEndX.current = e.clientX;
    dragIntentRef.current = false;
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current == null) return;

    dragEndX.current = e.clientX;
    const delta = Math.abs(e.clientX - dragStartX.current);
    if (!dragIntentRef.current && delta > 10) {
      dragIntentRef.current = true;
      setIsDragging(true);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current == null) return;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    if (dragIntentRef.current) {
      finishDrag(dragEndX.current ?? e.clientX);
      return;
    }

    resetDrag();
  };

  const onPointerCancel = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current == null) return;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    resetDrag();
  };

  const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) return;
    e.preventDefault();
    e.stopPropagation();
    suppressClickRef.current = false;
  };

  const slideDragProps =
    items.length > 1
      ? {
          onPointerDown,
          onPointerMove,
          onPointerUp,
          onPointerCancel,
          onClickCapture,
        }
      : {};

  const getCardAnimationClass = (index: number) => {
    const base =
      "absolute top-1/2 w-1/2 -translate-y-1/2 transition-all duration-500 ease-out";

    if (index === active) {
      return cn(base, "left-1/2 z-20 -translate-x-1/2 scale-100 opacity-100");
    }
    if (index === (active + 1) % items.length) {
      return cn(base, "right-0 z-10 origin-right scale-[0.94] opacity-100");
    }
    if (index === (active - 1 + items.length) % items.length) {
      return cn(base, "left-0 z-10 origin-left scale-[0.94] opacity-100");
    }
    return cn(
      base,
      "left-1/2 z-0 -translate-x-1/2 scale-90 opacity-0 pointer-events-none",
    );
  };

  if (items.length === 0) return null;

  const isLight = theme === "light";
  const navButtonClass = isLight
    ? "border border-border bg-card text-foreground shadow-sm hover:border-brand-accent/50 hover:bg-card"
    : "border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-sm hover:bg-white/20";
  const pageNumberInactiveClass = isLight
    ? "text-muted-foreground/55 hover:text-brand-accent/80"
    : "text-white/35 hover:text-white/70";
  const pageNumberActiveClass = isLight
    ? "text-brand-accent"
    : "text-brand-accent";

  const activeItem = items[active];
  const slideLabel = getSlideLabel?.(activeItem) ?? String(active + 1);
  const slideAnnouncement =
    formatSlideAnnouncement?.(slideLabel, active + 1, items.length) ??
    `${slideLabel}, ${active + 1} / ${items.length}`;

  return (
    <section
      className={cn("mx-auto w-full", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={labels.region}
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {slideAnnouncement}
      </p>
      <div
        className={cn(
          "grid items-center",
          !isMobile && items.length > 1
            ? "grid-cols-[auto_minmax(0,1fr)_auto] gap-3 sm:gap-4 md:gap-5"
            : "grid-cols-1",
        )}
      >
        {!isMobile && items.length > 1 ? (
          <button
            type="button"
            data-carousel-control
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-full transition-all hover:scale-110",
              navButtonClass,
            )}
            onClick={goPrev}
            aria-label={labels.prev}
          >
            <LuChevronLeft className="size-5" />
          </button>
        ) : null}

        <div
          className={cn(
            "relative h-[min(400px,62vh)] min-h-[340px] min-w-0 overflow-hidden sm:h-[440px]",
            viewportClassName,
          )}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          ref={carouselRef}
        >
          <div className="pointer-events-none absolute inset-0">
            {items.map((item, index) => {
              const isActive = index === active;
              const isFullyHidden =
                index !== active &&
                index !== (active + 1) % items.length &&
                index !== (active - 1 + items.length) % items.length;
              const itemLabel = getSlideLabel?.(item) ?? String(index + 1);
              const activateLabel =
                formatActivateLabel?.(itemLabel) ?? `Show slide ${index + 1}`;

              return (
                <div
                  key={item.id}
                  className={cn(
                    getCardAnimationClass(index),
                    isFullyHidden
                      ? "pointer-events-none"
                      : cn(
                          "pointer-events-auto",
                          items.length > 1 &&
                            cn(
                              "touch-pan-y select-none",
                              isDragging ? "cursor-grabbing" : "cursor-grab",
                            ),
                        ),
                  )}
                  aria-hidden={isFullyHidden || !isActive || undefined}
                  {...(!isFullyHidden ? slideDragProps : {})}
                >
                  {renderItem(item, index, {
                    isActive,
                    onActivate: () => selectSlide(index),
                    activateLabel,
                  })}
                </div>
              );
            })}
          </div>

          {items.length > 1 ? (
            <div className="absolute inset-x-0 bottom-2 z-30 flex items-center justify-center gap-3 sm:bottom-4 sm:gap-4">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  data-carousel-control
                  className={cn(
                    "font-mono text-sm font-semibold tabular-nums transition-colors duration-300",
                    active === idx
                      ? pageNumberActiveClass
                      : pageNumberInactiveClass,
                  )}
                  onClick={() => selectSlide(idx)}
                  aria-label={`${labels.dot} ${idx + 1}`}
                  aria-current={active === idx ? "true" : undefined}
                >
                  {String(idx + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        {!isMobile && items.length > 1 ? (
          <button
            type="button"
            data-carousel-control
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-full transition-all hover:scale-110",
              navButtonClass,
            )}
            onClick={goNext}
            aria-label={labels.next}
          >
            <LuChevronRight className="size-5" />
          </button>
        ) : null}
      </div>
    </section>
  );
}

export default ThreeDCarousel;
