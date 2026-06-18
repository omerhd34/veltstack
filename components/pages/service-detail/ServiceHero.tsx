import type { IconType } from "react-icons";
import { LuArrowRight, LuClock } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/shadcn";
import { SiteContainer } from "@/components/layout/SiteContainer";

interface ServiceHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  deliveryTime: string;
  deliveryLabel: string;
  ctaButton: string;
  icon: IconType;
  className?: string;
}

export function ServiceHero({
  badge,
  title,
  subtitle,
  deliveryTime,
  deliveryLabel,
  ctaButton,
  icon: Icon,
  className,
}: ServiceHeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#071510] py-24 text-white md:py-32 ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 size-[500px] rounded-full bg-emerald-600/8 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 size-[400px] rounded-full bg-emerald-800/6 blur-[80px]"
      />

      <SiteContainer className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              {badge}
            </span>

            <h1 className="mt-8 font-(family-name:--font-heading) text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.25rem]">
              {title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-emerald-50/70">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-emerald-200/80">
                <LuClock className="size-4 text-emerald-400" aria-hidden />
                <span className="font-medium text-emerald-100">{deliveryLabel}:</span>
                <span>{deliveryTime}</span>
              </div>
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                className="h-12 gap-2 rounded-full bg-brand-accent px-8 text-base font-semibold text-white hover:bg-brand-accent/85"
                asChild
              >
                <Link href="/iletisim">
                  {ctaButton}
                  <LuArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative flex size-48 items-center justify-center rounded-3xl border border-emerald-800/50 bg-emerald-950/60 shadow-2xl shadow-black/30 md:size-56">
              <div
                aria-hidden
                className="absolute inset-0 rounded-3xl bg-linear-to-br from-emerald-500/10 to-transparent"
              />
              <Icon className="relative size-20 text-emerald-300 md:size-24" strokeWidth={1.25} />
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
