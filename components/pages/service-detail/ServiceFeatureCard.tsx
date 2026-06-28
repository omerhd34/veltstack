"use client";

import {
  LuArrowUpRight,
  LuChartLine,
  LuLanguages,
  LuLayoutDashboard,
  LuSearch,
  LuShieldCheck,
  LuSmartphone,
  LuSparkles,
  LuSunMoon,
  LuZap,
} from "react-icons/lu";
import { cn } from "@/lib/utils";

export const featureIcons = [
  LuSearch,
  LuSparkles,
  LuZap,
  LuSmartphone,
  LuLanguages,
  LuSunMoon,
  LuLayoutDashboard,
  LuShieldCheck,
  LuChartLine,
] as const;

interface ServiceFeatureCardProps {
  title: string;
  description: string;
  index: number;
  detailLabel: string;
  className?: string;
}

export function ServiceFeatureCard({
  title,
  description,
  index,
  detailLabel,
  className,
}: ServiceFeatureCardProps) {
  const Icon = featureIcons[index % featureIcons.length];

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-5 shadow-[0_2px_16px_rgb(0_0_0/0.04)] transition-all duration-300 hover:border-brand-accent/30 hover:shadow-[0_12px_32px_rgb(58_107_82/0.1)]",
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/15">
          <Icon className="size-5" strokeWidth={1.75} aria-hidden />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-brand-accent/70">
            {String(index + 1).padStart(2, "0")} · {detailLabel}
          </p>
          <h3 className="mt-1 font-(family-name:--font-heading) text-base font-bold leading-snug text-[#0A0A0F]">
            {title}
          </h3>
          <p className="mt-2 line-clamp-4 text-sm leading-[1.75] text-muted-foreground">
            {description}
          </p>
        </div>

        <LuArrowUpRight
          className="size-4 shrink-0 text-muted-foreground/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-accent"
          aria-hidden
        />
      </div>
    </article>
  );
}

interface FeatureShowcaseProps {
  title: string;
  description: string;
  index: number;
  total: number;
  detailLabel: string;
}

export function FeatureShowcase({
  title,
  description,
  index,
  total,
  detailLabel,
}: FeatureShowcaseProps) {
  const Icon = featureIcons[index % featureIcons.length];

  return (
    <div className="relative flex h-full min-h-128 flex-col overflow-hidden rounded-[2rem] bg-linear-to-br from-[#071510] via-[#0f2a1e] to-[#0a1f17] p-10 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300 lg:min-h-136 lg:p-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgb(58_107_82/0.45),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 bottom-0 size-56 rounded-full bg-emerald-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-4 font-(family-name:--font-heading) text-[7.5rem] font-bold leading-none text-white/6 select-none"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative mt-auto flex flex-col">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-white/10 text-emerald-300 ring-1 ring-white/15 backdrop-blur-md">
          <Icon className="size-7" strokeWidth={1.5} aria-hidden />
        </div>

        <p className="mt-8 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-emerald-400/75">
          {detailLabel}
        </p>
        <h3 className="mt-3 max-w-md font-(family-name:--font-heading) text-2xl font-bold leading-tight tracking-tight text-white md:text-[1.875rem]">
          {title}
        </h3>
        <p className="mt-5 max-w-136 text-[0.9375rem] leading-[1.95] text-emerald-50/72 md:text-base md:leading-loose">
          {description}
        </p>

        <div
          aria-hidden
          className="mt-10 flex items-center gap-2 border-t border-white/8 pt-6 text-xs font-medium text-emerald-400/50"
        >
          <span className="size-1.5 rounded-full bg-emerald-400/60" />
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
