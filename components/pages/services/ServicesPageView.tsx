import { getTranslations } from "next-intl/server";
import { ServicesPageHero } from "./ServicesPageHero";
import { ServicesPackagesSection } from "./ServicesPackagesSection";
import { ServicesPageCTA } from "./ServicesPageCTA";

interface ServicesPageViewProps {
  className?: string;
}

export async function ServicesPageView({ className }: ServicesPageViewProps) {
  const t = await getTranslations("servicesPage");
  const stats = t.raw("stats") as { value: string; label: string }[];

  return (
    <div className={className}>
      <ServicesPageHero
        badge={t("heroBadge")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        subtitleSecondary={t("heroSubtitleSecondary")}
        imageAlt={t("heroImageAlt")}
        scrollLabel={t("scrollLabel")}
        stats={stats}
      />
      <ServicesPackagesSection />
      <ServicesPageCTA
        badge={t("ctaBadge")}
        tagline={t("ctaTagline")}
        title={t("ctaTitle")}
        titleLead={t("ctaTitleLead")}
        titleAccent={t("ctaTitleAccent")}
        subtitle={t("ctaSubtitle")}
        highlights={[t("ctaPoint1"), t("ctaPoint2"), t("ctaPoint3")]}
        buttonLabel={t("ctaButton")}
        note={t("ctaNote")}
      />
    </div>
  );
}
