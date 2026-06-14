"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { ServiceCard } from "./ServiceCard";
import { serviceItems } from "./service-items";

export interface ServiceSlideItem {
  href: string;
  title: string;
  description: string;
  tag: string;
  index: number;
}

interface ServicesCarouselLabels {
  prev: string;
  next: string;
  dot: string;
}

interface ServicesCarouselProps {
  services: ServiceSlideItem[];
  labels: ServicesCarouselLabels;
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

export function ServicesCarousel({
  services,
  labels,
  className,
}: ServicesCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const [gap, setGap] = useState(20);

  const maxIndex = Math.max(0, services.length - perPage);
  const slideStep = cardWidth + gap;
  const dotCount = maxIndex + 1;

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
      Math.min(current, Math.max(0, services.length - nextPerPage)),
    );
  }, [services.length]);

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
      <div className="mb-6 flex items-center justify-end gap-4">
        <div className="flex items-center gap-1.5 rounded-full border border-border/70 bg-white/80 p-1 shadow-sm backdrop-blur-sm">
          <button
            type="button"
            onClick={goPrev}
            aria-label={labels.prev}
            disabled={dotCount <= 1}
            className="flex size-10 items-center justify-center rounded-full text-foreground transition-all hover:bg-brand-accent/10 hover:text-brand-accent disabled:pointer-events-none disabled:opacity-40"
          >
            <LuChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label={labels.next}
            disabled={dotCount <= 1}
            className="flex size-10 items-center justify-center rounded-full text-foreground transition-all hover:bg-brand-accent/10 hover:text-brand-accent disabled:pointer-events-none disabled:opacity-40"
          >
            <LuChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div ref={viewportRef} className="w-full overflow-hidden px-0.5">
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
          {services.map((service) => {
            const config = serviceItems.find(
              (item) => item.href === service.href,
            );
            if (!config) return null;

            return (
              <div
                key={service.href}
                className="min-w-0 shrink-0"
                style={{ width: cardWidth > 0 ? cardWidth : undefined }}
              >
                <ServiceCard
                  variant="slide"
                  numbered
                  index={service.index}
                  href={service.href}
                  title={service.title}
                  description={service.description}
                  tag={service.tag}
                  icon={config.icon}
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
              key={`service-slide-dot-${dotIndex}`}
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
