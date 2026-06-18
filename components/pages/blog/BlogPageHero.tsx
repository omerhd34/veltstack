// components/pages/blog/BlogPageHero.tsx
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ServicesPageHeroImage } from "@/components/pages/services/ServicesPageHeroImage";

interface BlogPageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  imageAlt: string;
  postCount: number;
}

export function BlogPageHero({
  badge,
  title,
  subtitle,
  imageAlt,
  postCount,
}: BlogPageHeroProps) {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-[#050f0c] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgb(58_107_82/0.16),transparent)]"
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
        <div className="grid min-h-0 flex-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="min-w-0 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-emerald-300/90">
              {badge}
            </span>

            <h1 className="mt-6 font-(family-name:--font-heading) text-[2rem] font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[3rem]">
              {title}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-[1.85] text-emerald-50/70 sm:text-base lg:text-lg">
              {subtitle}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-emerald-800/60 bg-emerald-950/60 px-4 py-2 text-sm font-semibold text-emerald-300">
                {postCount} yazı
              </span>
              <span className="h-px flex-1 max-w-[80px] bg-emerald-800/40" />
              <span className="text-xs text-emerald-400/50 uppercase tracking-widest">
                Veltstack
              </span>
            </div>
          </div>

          <ServicesPageHeroImage
            alt={imageAlt}
            className="mx-auto w-full max-w-sm lg:max-w-none lg:justify-self-end"
          />
        </div>
      </SiteContainer>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-500/20 to-transparent"
      />
    </section>
  );
}
