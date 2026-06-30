import { SiteContainer } from "@/components/layout/SiteContainer";
import { WhyMeGrid } from "./WhyMeGrid";
import { WhyMeIntro } from "./WhyMeIntro";

interface WhyMeSectionProps {
  className?: string;
}

export function WhyMeSection({ className }: WhyMeSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#E4F0EA] py-24 md:py-32 ${className ?? ""}`}
      aria-labelledby="why-me-section-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_100%_0%,rgb(58_107_82/0.11),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_0%_100%,rgb(58_107_82/0.09),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-accent/25 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/3 size-80 rounded-full bg-brand-accent/6 blur-3xl"
      />

      <SiteContainer className="relative">
        <WhyMeIntro />
        <WhyMeGrid className="mt-10 md:mt-14" />
      </SiteContainer>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-accent/20 to-transparent"
      />
    </section>
  );
}
