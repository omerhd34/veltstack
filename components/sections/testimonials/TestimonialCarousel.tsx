"use client";

import { useCallback, useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./TestimonialCard";

const slowTransition =
  "transition-all duration-1000 ease-in-out motion-reduce:transition-none";

const navButtonClassName = cn(
  "group relative flex size-10 items-center justify-center rounded-full bg-background/90",
  "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent",
  "transition-colors hover:bg-muted",
  slowTransition,
);

export interface TestimonialItem {
  clientName: string;
  companyName: string;
  feedback: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
  className?: string;
}

export function TestimonialCarousel({
  testimonials,
  className,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex((nextIndex + count) % count);
    },
    [count],
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 15000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden">
        <div
          className="flex items-stretch transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={`${testimonial.clientName}-${testimonial.companyName}`}
              className="flex w-full shrink-0 px-1"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={goPrev}
        aria-label="Önceki yorum"
        className={cn(
          navButtonClassName,
          "absolute top-1/2 left-0 z-10 -translate-y-1/2 md:-left-5",
        )}
      >
        <BorderTrace durationSec={2.5} />
        <LuChevronLeft className="relative z-1 size-5" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Sonraki yorum"
        className={cn(
          navButtonClassName,
          "absolute top-1/2 right-0 z-10 -translate-y-1/2 md:-right-5",
        )}
      >
        <BorderTrace durationSec={2.5} />
        <LuChevronRight className="relative z-1 size-5" />
      </button>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {testimonials.map((testimonial, dotIndex) => (
          <button
            key={`dot-${testimonial.clientName}-${dotIndex}`}
            type="button"
            onClick={() => goTo(dotIndex)}
            aria-label={`Yorum ${dotIndex + 1}`}
            className={cn(
              "size-2 rounded-full transition-all",
              dotIndex === index
                ? "w-6 bg-brand-accent"
                : "bg-border hover:bg-brand-accent/50",
            )}
          />
        ))}
      </div>
    </div>
  );
}
