import { LuMessageCircleHeart } from "react-icons/lu";
import { TbGauge, TbHeartHandshake, TbStars } from "react-icons/tb";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionDecorIcon } from "@/components/ui/SectionDecorIcon";
import { TestimonialSlider } from "./TestimonialSlider";
import { TestimonialsIntro } from "./TestimonialsIntro";

interface TestimonialsSectionProps {
  className?: string;
}

export async function TestimonialsSection({
  className,
}: TestimonialsSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#F2F8F5] py-24 md:py-32 ${className ?? ""}`}
      aria-labelledby="testimonials-section-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgb(58_107_82/0.08),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_0%_100%,rgb(58_107_82/0.07),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-brand-accent/25 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/3 size-80 rounded-full bg-brand-accent/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-1/4 size-72 rounded-full bg-brand-accent/6 blur-3xl"
      />

      <SectionDecorIcon
        icon={TbGauge}
        tone="accent-muted"
        className="right-4 top-[16%] rotate-12 xl:right-14"
      />
      <SectionDecorIcon
        icon={TbStars}
        tone="accent"
        size="md"
        className="left-2 top-[20%] -rotate-12 xl:left-10"
      />
      <SectionDecorIcon
        icon={LuMessageCircleHeart}
        tone="accent-muted"
        className="right-0 bottom-[22%] rotate-6 xl:right-8"
      />
      <SectionDecorIcon
        icon={TbHeartHandshake}
        tone="accent"
        size="sm"
        className="bottom-[14%] left-6 -rotate-6 xl:left-14"
      />

      <SiteContainer className="relative">
        <TestimonialsIntro />
        <TestimonialSlider className="mx-auto mt-14 max-w-4xl px-10 md:mt-16 md:px-14" />
      </SiteContainer>
    </section>
  );
}
