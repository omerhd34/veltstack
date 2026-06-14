import { SiteContainer } from "@/components/layout/SiteContainer";
import { ServicesSlider } from "./ServicesSlider";
import { ServicesIntro } from "./ServicesIntro";

interface ServicesSectionProps {
  className?: string;
}

export function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <section
      className={`bg-[#F4F8F5] py-24 md:py-28 ${className ?? ""}`}
      aria-labelledby="services-section-title"
    >
      <SiteContainer className="relative">
        <ServicesIntro />
        <ServicesSlider className="mt-14 md:mt-16" />
      </SiteContainer>
    </section>
  );
}
