"use client";

import { useCallback, useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./TestimonialCard";

const slowTransition =
  "transition-all duration-1000 ease-in-out motion-reduce:transition-none";

const navButtonClassName = cn(
  "group relative flex size-11 items-center justify-center rounded-full bg-white/95 backdrop-blur-sm",
  "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent",
  "text-foreground/70 shadow-[0_4px_16px_rgb(0,0,0,0.06)]",
  "hover:bg-white hover:text-brand-accent hover:shadow-[0_8px_24px_rgb(58,107,82,0.12)]",
  slowTransition,
);

export interface TestimonialItem {
  clientName: string;
  companyName: string;
  feedback: string;
  rating: number;
}

interface TestimonialCarouselLabels {
  prev: string;
  next: string;
  slide: string;
}

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
  labels: TestimonialCarouselLabels;
  className?: string;
}

function formatSlideNumber(value: number) {
  return String(value).padStart(2, "0");
}

export function TestimonialCarousel({
  testimonials,
  labels,
  className,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const count = testimonials.length;

  const goTo = useCallback(
    (nextIndex: number) => {
      if (isAnimating || count <= 1) return;
      setIsAnimating(true);
      setIndex((nextIndex + count) % count);
      window.setTimeout(() => setIsAnimating(false), 600);
    },
    [count, isAnimating],
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (count <= 1) return;
    const timer = setInterval(() => {
      setIsAnimating(true);
      setIndex((current) => (current + 1) % count);
      window.setTimeout(() => setIsAnimating(false), 600);
    }, 15000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-6 select-none font-(family-name:--font-heading) text-7xl font-bold leading-none text-brand-accent/6 md:-right-4 md:-top-8 md:text-8xl"
      >
        {formatSlideNumber(index + 1)}
      </div>

      <div className="relative min-h-[320px] md:min-h-[340px]">
        {testimonials.map((testimonial, slideIndex) => (
          <div
            key={`${testimonial.clientName}-${testimonial.companyName}`}
            className={cn(
              "w-full transition-all duration-500 ease-out motion-reduce:transition-none",
              slideIndex === index
                ? "relative translate-y-0 opacity-100"
                : "pointer-events-none absolute inset-0 translate-y-3 opacity-0",
            )}
            aria-hidden={slideIndex !== index}
          >
            <TestimonialCard
              {...testimonial}
              active={slideIndex === index}
            />
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label={labels.prev}
            className={cn(
              navButtonClassName,
              "absolute top-1/2 left-0 z-10 -translate-y-1/2 md:-left-6",
            )}
          >
            <BorderTrace durationSec={2.5} />
            <LuChevronLeft className="relative z-1 size-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label={labels.next}
            className={cn(
              navButtonClassName,
              "absolute top-1/2 right-0 z-10 -translate-y-1/2 md:-right-6",
            )}
          >
            <BorderTrace durationSec={2.5} />
            <LuChevronRight className="relative z-1 size-5" />
          </button>

          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, dotIndex) => (
                <button
                  key={`dot-${testimonial.clientName}-${dotIndex}`}
                  type="button"
                  onClick={() => goTo(dotIndex)}
                  aria-label={labels.slide.replace(
                    "{index}",
                    String(dotIndex + 1),
                  )}
                  aria-current={dotIndex === index ? "true" : undefined}
                  className={cn(
                    "h-2 rounded-full transition-all duration-500",
                    dotIndex === index
                      ? "w-8 bg-brand-accent shadow-[0_0_12px_rgb(58,107,82,0.35)]"
                      : "w-2 bg-border hover:w-4 hover:bg-brand-accent/45",
                  )}
                />
              ))}
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/80">
              {formatSlideNumber(index + 1)}{" "}
              <span className="text-brand-accent/50">/</span>{" "}
              {formatSlideNumber(count)}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
