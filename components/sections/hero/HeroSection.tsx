import { getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { HeroImage } from "./HeroImage";
import { HeroContent } from "./HeroContent";
import { HeroCTA } from "./HeroCTA";

interface HeroSectionProps {
  className?: string;
}

export async function HeroSection({ className }: HeroSectionProps) {
  const t = await getTranslations("home");

  return (
    <section
      className={`relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden bg-[#0A0A0F] text-white ${className ?? ""}`}
    >
      <HeroImage />
      <SiteContainer className="relative z-10 w-full py-10 lg:py-16">
        <div className="flex max-w-2xl flex-col items-start gap-6 text-left lg:max-w-3xl lg:gap-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-emerald-300/90">
            {t("heroBadge")}
          </span>
          <HeroContent title={t("heroTitle")} subtitle={t("heroSubtitle")} />
          <HeroCTA primary={t("ctaPrimary")} secondary={t("ctaSecondary")} />
        </div>
      </SiteContainer>
    </section>
  );
}
