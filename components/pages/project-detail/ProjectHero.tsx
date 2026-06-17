import type { IconType } from "react-icons";
import { LuExternalLink } from "react-icons/lu";
import Image from "next/image";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { cn } from "@/lib/utils";

interface ProjectHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  metrics: { value: string; label: string }[];
  demoUrl?: string;
  demoLabel: string;
  imageUrl?: string;
  coverGradient: string;
  icon: IconType;
  className?: string;
}

export function ProjectHero({
  badge,
  title,
  subtitle,
  metrics,
  demoUrl,
  demoLabel,
  imageUrl,
  coverGradient,
  icon: Icon,
  className,
}: ProjectHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-[#050f0c] text-white",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgb(58_107_82/0.16),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 size-[480px] rounded-full bg-emerald-600/8 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 size-[360px] rounded-full bg-emerald-800/6 blur-[100px]"
      />

      <SiteContainer className="relative flex min-h-[calc(100svh-4rem)] flex-col px-4 py-8 sm:px-6 sm:py-10 md:py-12">
        <div className="grid min-h-0 flex-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-emerald-300/90">
              {badge}
            </span>

            <h1 className="mt-6 font-(family-name:--font-heading) text-[2rem] font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[3.25rem]">
              {title}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-[1.85] text-emerald-50/75 sm:text-base lg:text-lg">
              {subtitle}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div
                  key={`${metric.label}-${metric.value}`}
                  className="rounded-2xl border border-emerald-900/45 bg-[#0a1612]/70 px-4 py-4"
                >
                  <p className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-emerald-300/50">
                    {metric.label}
                  </p>
                  <p className="mt-1 font-(family-name:--font-heading) text-lg font-bold text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none lg:justify-self-end">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-linear-to-br from-brand-accent/20 via-transparent to-emerald-600/10 blur-2xl"
            />
            {demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/preview relative block"
                aria-label={`${demoLabel}: ${title}`}
              >
                <PreviewFrame
                  imageUrl={imageUrl}
                  title={title}
                  coverGradient={coverGradient}
                  icon={Icon}
                />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors group-hover/preview:bg-emerald-600/80">
                  <LuExternalLink className="size-3.5" aria-hidden />
                  {demoLabel}
                </span>
              </a>
            ) : (
              <PreviewFrame
                imageUrl={imageUrl}
                title={title}
                coverGradient={coverGradient}
                icon={Icon}
              />
            )}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

interface PreviewFrameProps {
  imageUrl?: string;
  title: string;
  coverGradient: string;
  icon: IconType;
}

function PreviewFrame({
  imageUrl,
  title,
  coverGradient,
  icon: Icon,
}: PreviewFrameProps) {
  return (
    <div
      className={cn(
        "relative aspect-16/10 overflow-hidden rounded-3xl border border-emerald-700/30 shadow-[0_24px_80px_rgb(0_0_0/0.45)] transition-transform duration-500 group-hover/preview:scale-[1.01]",
        !imageUrl && cn("bg-linear-to-br", coverGradient),
      )}
    >
      {imageUrl ? (
        <>
          <Image
            src={imageUrl}
            alt={title}
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover/preview:scale-105"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#050f0c]/60 via-transparent to-transparent"
          />
        </>
      ) : (
        <div className="flex h-full items-center justify-center">
          <Icon
            className="size-24 text-white/20 lg:size-32"
            strokeWidth={1.25}
            aria-hidden
          />
        </div>
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-emerald-400/15"
      />
    </div>
  );
}
