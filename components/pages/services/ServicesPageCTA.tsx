import { LuMessageCircle } from "react-icons/lu";
import { TbGitBranch, TbRocket, TbSparkles } from "react-icons/tb";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionDecorIcon } from "@/components/ui/SectionDecorIcon";
import { CTAHighlights } from "@/components/sections/cta/CTAHighlights";
import { toLatinUppercase } from "@/lib/utils";

interface ServicesPageCTAProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  note: string;
  badge?: string;
  tagline?: string;
  titleLead?: string;
  titleAccent?: string;
  highlights?: [string, string, string];
  className?: string;
}

export function ServicesPageCTA({
  title,
  subtitle,
  buttonLabel,
  note,
  badge,
  tagline,
  titleLead,
  titleAccent,
  highlights,
  className,
}: ServicesPageCTAProps) {
  const hasSplitTitle = Boolean(titleLead && titleAccent);

  return (
    <section
      className={`relative overflow-hidden bg-[#E8F3ED] py-20 md:py-28 ${className ?? ""}`}
      aria-labelledby="page-cta-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgb(58_107_82/0.08),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_0%_100%,rgb(58_107_82/0.07),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/3 size-80 rounded-full bg-brand-accent/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-1/4 size-72 rounded-full bg-brand-accent/6 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-accent/25 to-transparent"
      />

      <SectionDecorIcon
        icon={TbGitBranch}
        tone="accent-muted"
        className="left-6 top-[18%] -rotate-12 xl:left-14"
      />
      <SectionDecorIcon
        icon={TbRocket}
        tone="accent"
        size="md"
        className="right-8 top-[22%] rotate-6 xl:right-16"
      />
      <SectionDecorIcon
        icon={TbSparkles}
        tone="accent-muted"
        size="sm"
        className="bottom-[18%] left-4 rotate-12 xl:left-12"
      />

      <SiteContainer className="relative">
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-[#0A0A0F] px-6 py-14 shadow-[0_24px_80px_rgb(58_107_82/0.12)] md:px-14 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 size-[480px] -translate-x-1/2 rounded-full bg-brand-accent/12 blur-[90px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgb(58_107_82/0.12),transparent_60%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/30 to-transparent md:inset-x-12"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            {badge ? (
              <SectionBadge>{toLatinUppercase(badge)}</SectionBadge>
            ) : null}

            {tagline ? (
              <p className="mt-6 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/55">
                <span aria-hidden className="h-px w-8 bg-emerald-500/25" />
                {tagline}
                <span aria-hidden className="h-px w-8 bg-emerald-500/25" />
              </p>
            ) : null}

            <h2
              id="page-cta-title"
              className={`font-(family-name:--font-heading) text-3xl font-bold leading-[1.08] tracking-tight text-white md:text-4xl lg:text-5xl ${badge || tagline ? "mt-5" : ""}`}
            >
              {hasSplitTitle ? (
                <>
                  {titleLead}{" "}
                  <span className="bg-linear-to-r from-emerald-200 via-emerald-300 to-brand-accent bg-clip-text text-transparent">
                    {titleAccent}
                  </span>
                </>
              ) : (
                title
              )}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-emerald-50/60 md:text-lg">
              {subtitle}
            </p>

            {highlights ? <CTAHighlights points={highlights} /> : null}

            <div
              className={`flex flex-col items-center gap-4 ${highlights ? "mt-10" : "mt-8"}`}
            >
              <PrimaryCtaLink
                href="/iletisim"
                variant="accent"
                className="h-13 px-10"
                showArrow={false}
                leadingIcon={<LuMessageCircle className="size-5" aria-hidden />}
              >
                {buttonLabel}
              </PrimaryCtaLink>
              <span className="text-sm text-white/40">{note}</span>
            </div>
          </div>
        </div>
      </SiteContainer>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-accent/20 to-transparent"
      />
    </section>
  );
}
