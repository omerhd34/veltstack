import { SiteContainer } from "@/components/layout/SiteContainer";
import { WhyMeGrid } from "./WhyMeGrid";
import { WhyMeIntro } from "./WhyMeIntro";

interface WhyMeSectionProps {
  className?: string;
}

export function WhyMeSection({ className }: WhyMeSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#0A0A0F] py-24 text-white md:py-32 ${className ?? ""}`}
      aria-labelledby="why-me-section-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-brand-accent/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 size-[500px] rounded-full bg-brand-accent/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 size-[400px] rounded-full bg-brand-accent/5 blur-3xl"
      />

      <SiteContainer className="relative">
        <WhyMeIntro />
        <WhyMeGrid className="mt-14 md:mt-16" />
      </SiteContainer>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-brand-accent/40 to-transparent"
      />
    </section>
  );
}
