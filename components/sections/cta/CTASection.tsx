import { LuEye, LuMessageCircle } from "react-icons/lu";
import { getTranslations } from "next-intl/server";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { toLatinUppercase } from "@/lib/utils";
import { CTAHighlights } from "./CTAHighlights";

interface CTASectionProps {
  className?: string;
}

export async function CTASection({ className }: CTASectionProps) {
  const t = await getTranslations("home");

  return (
    <section
      className={`relative overflow-hidden bg-[#E8F3ED] py-20 md:py-28 ${className ?? ""}`}
      aria-labelledby="home-cta-title"
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
            <SectionBadge>{toLatinUppercase(t("ctaBadge"))}</SectionBadge>

            <p className="mt-6 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/55">
              <span aria-hidden className="h-px w-8 bg-emerald-500/25" />
              {t("ctaTagline")}
              <span aria-hidden className="h-px w-8 bg-emerald-500/25" />
            </p>

            <h2
              id="home-cta-title"
              className="mt-5 font-(family-name:--font-heading) text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.25rem]"
            >
              {t("ctaTitleLead")}{" "}
              <span className="bg-linear-to-r from-emerald-200 via-emerald-300 to-brand-accent bg-clip-text text-transparent">
                {t("ctaTitleAccent")}
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-emerald-50/75 md:text-lg">
              {t("ctaSubtitle")}
            </p>

            <CTAHighlights points={[t("ctaPoint1"), t("ctaPoint2")]} />

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <PrimaryCtaLink
                href="/iletisim"
                variant="accent"
                className="h-13 px-10"
                showArrow={false}
                leadingIcon={<LuMessageCircle className="size-5" aria-hidden />}
              >
                {t("ctaButton")}
              </PrimaryCtaLink>
              <PrimaryCtaLink
                href="/projeler"
                className="ring-1 ring-white/20"
                showArrow={false}
                leadingIcon={<LuEye className="size-5" aria-hidden />}
              >
                {t("ctaSecondary")}
              </PrimaryCtaLink>
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
