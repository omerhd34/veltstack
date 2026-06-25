import { TbDatabase, TbRouteSquare2, TbSeo, TbServer2 } from "react-icons/tb";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionDecorIcon } from "@/components/ui/SectionDecorIcon";
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
      <SectionDecorIcon
        icon={TbRouteSquare2}
        tone="accent"
        className="right-4 top-24 rotate-6 xl:right-10"
      />
      <SectionDecorIcon
        icon={TbServer2}
        tone="accent-muted"
        className="left-2 top-[16%] -rotate-12 xl:left-8"
      />
      <SectionDecorIcon
        icon={TbDatabase}
        tone="accent"
        size="md"
        className="right-0 bottom-[18%] rotate-12 xl:right-6"
      />
      <SectionDecorIcon
        icon={TbSeo}
        tone="accent-muted"
        size="sm"
        className="bottom-28 left-4 -rotate-6 xl:left-10"
      />
      <SiteContainer className="relative">
        <ServicesIntro />
        <ServicesSlider className="mt-8 md:mt-10" />
      </SiteContainer>
    </section>
  );
}
