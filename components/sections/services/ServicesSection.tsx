import { SiteContainer } from "@/components/layout/SiteContainer";
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
      <SiteContainer className="relative">
        <ServicesIntro />
      </SiteContainer>
      <div className="mx-auto -mt-2 w-full max-w-350 px-4 md:-mt-6">
        <ServicesSlider />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-400/20 to-transparent"
      />
    </section>
  );
}
