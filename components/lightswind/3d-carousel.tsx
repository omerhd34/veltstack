"use client";

import {
  useRef,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
  type TouchEvent,
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const minSwipeDistance = 50;

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

  const onTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart == null || touchEnd == null) return;

    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      goNext();
    } else if (distance < -minSwipeDistance) {
      goPrev();
    }
  };

  const getCardAnimationClass = (index: number) => {
    if (index === active) return "scale-100 opacity-100 z-20 -translate-y-1/2";
    if (index === (active + 1) % items.length) {
      return "translate-x-[38%] -translate-y-1/2 scale-[0.92] z-10";
    }
    if (index === (active - 1 + items.length) % items.length) {
      return "translate-x-[-38%] -translate-y-1/2 scale-[0.92] z-10";
    }
    return "scale-90 opacity-0 pointer-events-none -translate-y-1/2";
  };

  if (items.length === 0) return null;

  const isLight = theme === "light";
  const navButtonClass = isLight
    ? "border border-border bg-card text-foreground shadow-sm hover:border-brand-accent/50 hover:bg-card"
    : "border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-sm hover:bg-white/20";
  const dotInactiveClass = isLight
    ? "w-2 bg-border hover:bg-brand-accent/40"
    : "w-2 bg-white/25 hover:bg-white/40";

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
          "relative h-[min(360px,58vh)] min-h-[300px] w-full overflow-hidden p-1 sm:h-[380px]",
          viewportClassName,
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        ref={carouselRef}
      >
        <div className="absolute inset-0 flex items-center justify-center">
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
                  "absolute top-1/2 w-full max-w-lg -translate-y-1/2 px-4 transition-all duration-500 ease-out sm:max-w-xl",
                  getCardAnimationClass(index),
                )}
                aria-hidden={isFullyHidden || undefined}
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

        {!isMobile && items.length > 1 ? (
          <>
            <button
              type="button"
              className={cn(
                "absolute left-2 top-1/2 z-30 flex size-10 -translate-y-1/2 items-center justify-center rounded-full transition-all hover:scale-110 sm:left-4",
                navButtonClass,
              )}
              onClick={goPrev}
              aria-label={labels.prev}
            >
              <LuChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              className={cn(
                "absolute right-2 top-1/2 z-30 flex size-10 -translate-y-1/2 items-center justify-center rounded-full transition-all hover:scale-110 sm:right-4",
                navButtonClass,
              )}
              onClick={goNext}
              aria-label={labels.next}
            >
              <LuChevronRight className="size-5" />
            </button>
          </>
        ) : null}

        {items.length > 1 ? (
          <div className="absolute inset-x-0 bottom-2 z-30 flex items-center justify-center gap-2 sm:bottom-4">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  active === idx ? "w-8 bg-brand-accent" : dotInactiveClass,
                )}
                onClick={() => selectSlide(idx)}
                aria-label={`${labels.dot} ${idx + 1}`}
                aria-current={active === idx ? "true" : undefined}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default ThreeDCarousel;
