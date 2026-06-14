"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { TestimonialCard } from "./TestimonialCard"

export interface TestimonialItem {
  clientName: string
  companyName: string
  feedback: string
  rating: number
}

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[]
  className?: string
}

export function TestimonialCarousel({
  testimonials,
  className,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex((nextIndex + count) % count)
    },
    [count]
  )

  const goNext = useCallback(() => goTo(index + 1), [goTo, index])
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % count)
    }, 15000)
    return () => clearInterval(timer)
  }, [count])

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
        className="absolute top-1/2 left-0 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 shadow-sm transition-colors hover:bg-muted md:-left-5"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Sonraki yorum"
        className="absolute top-1/2 right-0 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 shadow-sm transition-colors hover:bg-muted md:-right-5"
      >
        <ChevronRight className="size-5" />
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
                ? "w-6 bg-[#6C63FF]"
                : "bg-border hover:bg-[#6C63FF]/50"
            )}
          />
        ))}
      </div>
    </div>
  )
}
