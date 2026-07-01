import { LuChevronDown } from "react-icons/lu";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ServicesPageHeroImage } from "@/components/pages/services/ServicesPageHeroImage";
import { HeroStatsCards, type HeroStat } from "@/components/ui/HeroStatsCards";

interface ServiceHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  subtitleSecondary: string;
  imageAlt: string;
  scrollLabel: string;
  stats: HeroStat[];
  className?: string;
}

export function ServiceHero({
  badge,
  title,
  subtitle,
  subtitleSecondary,
  imageAlt,
  scrollLabel,
  stats,
  className,
}: ServiceHeroProps) {
  return (
    <section
      className={`relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-[#050f0c] text-white ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgb(58_107_82/0.14),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-20 size-[420px] rounded-full bg-emerald-600/6 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-20 size-[360px] rounded-full bg-emerald-800/5 blur-[100px]"
      />

      <SiteContainer className="relative flex min-h-[calc(100svh-4rem)] flex-col py-8 sm:py-10">
        <div className="grid min-h-0 flex-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="min-w-0">
            <SectionBadge>{badge}</SectionBadge>

            <h1 className="mt-6 font-(family-name:--font-heading) text-[1.875rem] font-bold leading-[1.08] tracking-tight sm:mt-8 sm:text-4xl lg:text-[2.875rem]">
              {title}
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-[1.85] text-emerald-50/75 sm:mt-6 sm:text-base lg:text-lg">
              {subtitle}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-[1.85] text-emerald-50/45 sm:text-[0.9375rem]">
              {subtitleSecondary}
            </p>
          </div>

          <ServicesPageHeroImage
            alt={imageAlt}
            className="mx-auto w-full max-w-sm lg:max-w-none lg:justify-self-end"
          />
        </div>

        <div className="mt-auto shrink-0 border-t border-emerald-900/35 pt-6 sm:pt-8">
          <HeroStatsCards stats={stats} />

          <a
            href="#service-features"
            className="mt-6 flex flex-col items-center gap-1.5 text-emerald-300/50 transition-colors hover:text-emerald-300/80 sm:mt-8"
          >
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em]">
              {scrollLabel}
            </span>
            <LuChevronDown className="size-4 animate-bounce" aria-hidden />
          </a>
        </div>
      </SiteContainer>
    </section>
  );
}
