import { SiteContainer } from "@/components/layout/SiteContainer";
import { WhyMeGrid } from "./WhyMeGrid";
import { WhyMeIntro } from "./WhyMeIntro";

interface WhyMeSectionProps {
  className?: string;
}

export function WhyMeSection({ className }: WhyMeSectionProps) {
  return (
    <section
      className={`border-y border-border/50 bg-background py-24 md:py-28 ${className ?? ""}`}
      aria-labelledby="why-me-section-title"
    >
      <SiteContainer>
        <WhyMeIntro />
        <WhyMeGrid className="mt-12 md:mt-14" />
      </SiteContainer>
    </section>
  );
}
