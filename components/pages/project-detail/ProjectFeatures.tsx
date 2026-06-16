import type { IconType } from "react-icons";
import {
  LuBot,
  LuCalculator,
  LuChartLine,
  LuCircleCheck,
  LuFileText,
  LuGlobe,
  LuScale,
  LuTarget,
  LuTrendingUp,
  LuWallet,
} from "react-icons/lu";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { cn } from "@/lib/utils";

const featureIcons = [
  LuChartLine,
  LuWallet,
  LuTarget,
  LuScale,
  LuGlobe,
  LuCalculator,
  LuTrendingUp,
  LuFileText,
  LuBot,
] as const;

interface ProjectFeatureItemProps {
  title: string;
  description: string;
  index: number;
  icon: IconType;
}

function ProjectFeatureItem({
  title,
  description,
  index,
  icon: Icon,
}: ProjectFeatureItemProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border/70 bg-white p-6 shadow-[0_2px_12px_rgb(0_0_0/0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-accent/35 hover:shadow-[0_20px_48px_rgb(58_107_82/0.12)] sm:p-7">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand-accent transition-transform duration-500 group-hover:scale-x-100"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute right-5 top-5 font-(family-name:--font-heading) text-5xl font-bold leading-none text-brand-accent/10 transition-colors duration-500 group-hover:text-brand-accent/20"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/15 transition-all duration-300 group-hover:bg-brand-accent group-hover:text-white group-hover:ring-brand-accent/30">
          <Icon className="size-5" strokeWidth={1.75} aria-hidden />
        </span>

        <h3 className="mt-5 pr-10 font-(family-name:--font-heading) text-lg font-bold leading-snug tracking-tight text-[#0A0A0F] transition-colors group-hover:text-brand-accent">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">
          {description}
        </p>
      </div>
    </article>
  );
}

interface ProjectFeaturesProps {
  badge: string;
  title: string;
  subtitle: string;
  features: { title: string; description: string }[];
  className?: string;
}

export function ProjectFeatures({
  badge,
  title,
  subtitle,
  features,
  className,
}: ProjectFeaturesProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#F4F8F5] py-24 md:py-32",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgb(58_107_82/0.08),transparent)]"
      />

      <SiteContainer className="relative px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent backdrop-blur-sm">
            <LuCircleCheck className="size-3.5" aria-hidden />
            {badge}
          </span>

          <h2 className="mt-6 font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-[#0A0A0F] md:text-4xl">
            {title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <ProjectFeatureItem
              key={feature.title}
              title={feature.title}
              description={feature.description}
              index={index}
              icon={featureIcons[index % featureIcons.length]}
            />
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
