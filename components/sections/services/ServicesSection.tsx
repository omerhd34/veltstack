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
      className={`relative overflow-hidden bg-[#081A14] py-24 text-white md:py-32 ${className ?? ""}`}
      aria-labelledby="services-section-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_85%_0%,rgb(58_107_82/0.18),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_10%_100%,rgb(16_80_60/0.12),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/30 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 size-[420px] rounded-full bg-brand-accent/8 blur-3xl"
      />
      <SectionDecorIcon
        icon={TbRouteSquare2}
        tone="on-dark-muted"
        className="right-4 top-24 rotate-6 xl:right-10"
      />
      <SectionDecorIcon
        icon={TbServer2}
        tone="on-dark"
        className="left-2 top-[16%] -rotate-12 xl:left-8"
      />
      <SectionDecorIcon
        icon={TbDatabase}
        tone="on-dark-muted"
        size="md"
        className="right-0 bottom-[18%] rotate-12 xl:right-6"
      />
      <SectionDecorIcon
        icon={TbSeo}
        tone="on-dark"
        size="sm"
        className="bottom-28 left-4 -rotate-6 xl:left-10"
      />
      <SiteContainer className="relative">
        <ServicesIntro />
        <ServicesSlider className="mt-2 md:mt-4" />
      </SiteContainer>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-400/20 to-transparent"
      />
    </section>
  );
}
