"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { WhyMeCard } from "./WhyMeCard";
import { whyMeItems } from "./why-me-items";

export interface WhyMeSlideItem {
  id: string;
  title: string;
  description: string;
  index: number;
}

interface WhyMeCarouselLabels {
  prev: string;
  next: string;
  dot: string;
}

interface WhyMeCarouselProps {
  items: WhyMeSlideItem[];
  labels: WhyMeCarouselLabels;
  className?: string;
}

const GAP_REM = 1.25;

function getGapPx() {
  const rootFontSize = Number.parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  return GAP_REM * rootFontSize;
}

function getPerPage(width: number) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export function WhyMeCarousel({
  items,
  labels,
  className,
}: WhyMeCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const [gap, setGap] = useState(20);

  const maxIndex = Math.max(0, items.length - perPage);
  const slideStep = cardWidth + gap;
  const dotCount = maxIndex + 1;

  const iconMap = Object.fromEntries(
    whyMeItems.map((item) => [item.titleKey, item.icon]),
  ) as Record<string, IconType>;

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const nextPerPage = getPerPage(window.innerWidth);
    const nextGap =
      Number.parseFloat(getComputedStyle(track).columnGap) || getGapPx();
    const viewportWidth = viewport.clientWidth;
    const nextCardWidth = Math.floor(
      (viewportWidth - nextGap * (nextPerPage - 1)) / nextPerPage,
    );

    setPerPage(nextPerPage);
    setGap(nextGap);
    setCardWidth(nextCardWidth);
    setActiveIndex((current) =>
      Math.min(current, Math.max(0, items.length - nextPerPage)),
    );
  }, [items.length]);

  useEffect(() => {
    measure();

    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const goToIndex = useCallback(
    (index: number) => {
      if (dotCount <= 1) return;
      const wrapped = ((index % dotCount) + dotCount) % dotCount;
      setActiveIndex(wrapped);
    },
    [dotCount],
  );

  const goPrev = useCallback(
    () => goToIndex(activeIndex - 1),
    [activeIndex, goToIndex],
  );
  const goNext = useCallback(
    () => goToIndex(activeIndex + 1),
    [activeIndex, goToIndex],
  );

  return (
    <div className={cn("relative", className)}>
      <div className="mb-6 flex items-center justify-end gap-2 md:absolute md:-top-18 md:right-0 md:mb-0">
        <button
          type="button"
          onClick={goPrev}
          aria-label={labels.prev}
          className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:border-brand-accent/50 hover:bg-card"
        >
          <LuChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label={labels.next}
          className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:border-brand-accent/50 hover:bg-card"
        >
          <LuChevronRight className="size-5" />
        </button>
      </div>

      <div ref={viewportRef} className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-out"
          style={{
            gap: `${gap}px`,
            transform:
              cardWidth > 0
                ? `translateX(-${activeIndex * slideStep}px)`
                : undefined,
          }}
        >
          {items.map((item) => {
            const Icon = iconMap[item.id];
            if (!Icon) return null;

            return (
              <div
                key={item.id}
                className="flex min-w-0 shrink-0"
                style={{ width: cardWidth > 0 ? cardWidth : undefined }}
              >
                <WhyMeCard
                  index={item.index}
                  icon={Icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <div className="h-px flex-1 bg-border/80" />
        <div className="flex items-center gap-2">
          {Array.from({ length: dotCount }).map((_, dotIndex) => (
            <button
              key={`why-me-slide-dot-${dotIndex}`}
              type="button"
              onClick={() => goToIndex(dotIndex)}
              aria-label={`${labels.dot} ${dotIndex + 1}`}
              aria-current={dotIndex === activeIndex ? "true" : undefined}
              className={cn(
                "h-2 rounded-full transition-all",
                dotIndex === activeIndex
                  ? "w-8 bg-brand-accent"
                  : "w-2 bg-border hover:bg-brand-accent/40",
              )}
            />
          ))}
        </div>
        <div className="h-px flex-1 bg-border/80" />
      </div>
    </div>
  );
}
