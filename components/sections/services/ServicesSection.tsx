import { SiteContainer } from "@/components/layout/SiteContainer";
import { ServicesSlider } from "./ServicesSlider";
import { ServicesIntro } from "./ServicesIntro";

interface ServicesSectionProps {
  className?: string;
}

export function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#F4F8F5] py-24 md:py-32 ${className ?? ""}`}
      aria-labelledby="services-section-title"
    >
      <SiteContainer className="relative">
        <ServicesIntro />
        <ServicesSlider className="mt-8 md:mt-10" />
      </SiteContainer>
    </section>
  );
}
