import { getLocale, getTranslations } from "next-intl/server";
import { serviceItems } from "@/components/sections/services/service-items";
import type { ServiceSlug } from "@/components/sections/services/service-items";
import { ServicesPackagesSection } from "@/components/pages/services/ServicesPackagesSection";
import {
  serviceHeroStats,
  servicePackageCategories,
  serviceTechStacks,
} from "./service-detail-config";
import { ServiceHero } from "./ServiceHero";
import { ServiceFeatures } from "./ServiceFeatures";
import { ServiceProcess } from "./ServiceProcess";
import { CTASection } from "@/components/sections/cta";
import { ServiceTech } from "./ServiceTech";
import { getServiceTechDescriptions } from "./service-tech-descriptions";
import { servicePrimaryTechStacks } from "./service-tech-primary";
import {
  serviceTechCategories,
  serviceTechCategoryMessageKeys,
} from "./service-tech-categories";

interface ServiceDetailViewProps {
  slug: ServiceSlug;
  className?: string;
}

export async function ServiceDetailView({
  slug,
  className,
}: ServiceDetailViewProps) {
  const locale = await getLocale();
  const t = await getTranslations("serviceDetails");
  const service = serviceItems.find((item) => item.slug === slug);

  if (!service) return null;

  const features = t.raw(`${slug}.features`) as {
    title: string;
    description: string;
  }[];
  const techDescriptions = getServiceTechDescriptions(locale);
  const heroStatValues = serviceHeroStats[slug];

  const stats = [
    {
      value: heroStatValues.delivery,
      label: t("statDelivery"),
      hint: t("statDeliveryHint"),
    },
    {
      value: heroStatValues.support,
      label: t("statSupport"),
      hint: t("statSupportHint"),
    },
    {
      value: heroStatValues.tiers,
      label: t("statTiers"),
      hint: t("statTiersHint"),
    },
    {
      value: heroStatValues.revisions,
      label: t("statRevisions"),
      hint: t("statRevisionsHint"),
    },
  ];

  const techCategoryDefs = serviceTechCategories[slug];
  const techCategories = techCategoryDefs?.map((category) => ({
    label: t(serviceTechCategoryMessageKeys[category.key]),
    items: [...category.items],
  }));

  return (
    <div className={className}>
      <ServiceHero
        badge={t(`${slug}.heroBadge`)}
        title={t(`${slug}.heroTitle`)}
        subtitle={t(`${slug}.heroSubtitle`)}
        subtitleSecondary={t(`${slug}.heroSubtitleSecondary`)}
        imageAlt={t("heroImageAlt")}
        scrollLabel={t("featuresTitle")}
        stats={stats}
      />
      <ServiceFeatures
        badge={t("featuresBadge")}
        title={t("featuresTitle")}
        subtitle={t("featuresSubtitle")}
        detailLabel={t("featureDetailLabel")}
        features={features}
      />
      <ServicesPackagesSection
        lockedCategory={servicePackageCategories[slug]}
      />
      <ServiceProcess
        title={t("processTitle")}
        subtitle={t(`${slug}.processSubtitle`)}
        steps={
          t.raw(`${slug}.processItems`) as {
            title: string;
            description: string;
          }[]
        }
      />
      <ServiceTech
        title={t("techTitle")}
        subtitle={t(`${slug}.techSubtitle`)}
        techStack={serviceTechStacks[slug]}
        techDescriptions={techDescriptions}
        primaryTech={servicePrimaryTechStacks[slug]}
        categories={techCategories}
      />
      <CTASection />
    </div>
  );
}

export function getServiceStaticSlugs(): ServiceSlug[] {
  return serviceItems.map((item) => item.slug);
}

export { isServiceSlug } from "@/components/sections/services/service-items";
