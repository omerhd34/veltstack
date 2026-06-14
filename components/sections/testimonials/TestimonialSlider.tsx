import { getTranslations } from "next-intl/server"
import { TestimonialCarousel, type TestimonialItem } from "./TestimonialCarousel"

interface TestimonialSliderProps {
  className?: string
}

export async function TestimonialSlider({ className }: TestimonialSliderProps) {
  const t = await getTranslations("home")
  const testimonials = t.raw("testimonialItems") as TestimonialItem[]

  return <TestimonialCarousel testimonials={testimonials} className={className} />
}
