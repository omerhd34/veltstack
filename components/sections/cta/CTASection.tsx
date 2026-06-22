import { LuEye, LuMessageCircle } from "react-icons/lu";
import { getTranslations } from "next-intl/server";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";
import { SiteContainer } from "@/components/layout/SiteContainer";

interface CTASectionProps {
  className?: string;
}

export async function CTASection({ className }: CTASectionProps) {
  const t = await getTranslations("home");

  return (
    <section
      className={`relative overflow-hidden bg-[#0A0A0F] py-24 md:py-32 ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 size-[600px] rounded-full bg-brand-accent/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-accent/50 to-transparent"
      />

      <SiteContainer className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            Başlayalım
          </span>

          <h2 className="mt-8 font-(family-name:--font-heading) text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
            {t("ctaTitle")}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/55 md:text-xl">
            {t("ctaSubtitle")}
          </p>

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
      </SiteContainer>
    </section>
  );
}
