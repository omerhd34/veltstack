import { getTranslations } from "next-intl/server";
import { serviceItems } from "@/components/sections/services/service-items";
import type { ServiceSlug } from "@/components/sections/services/service-items";
import { TestimonialsSection } from "@/components/sections/testimonials/TestimonialsSection";
import {
  serviceRelatedProjects,
  serviceTechStacks,
} from "./service-detail-config";
import { ServiceHero } from "./ServiceHero";
import { ServiceFeatures } from "./ServiceFeatures";
import { ServiceProcess } from "./ServiceProcess";
import { ServiceTech } from "./ServiceTech";
import { ServiceProjects } from "./ServiceProjects";
import { ServiceFAQ } from "./ServiceFAQ";
import { ServiceCTA } from "./ServiceCTA";

interface ServiceDetailViewProps {
  slug: ServiceSlug;
  className?: string;
}

export async function ServiceDetailView({ slug, className }: ServiceDetailViewProps) {
  const t = await getTranslations("serviceDetails");
  const service = serviceItems.find((item) => item.slug === slug);

  if (!service) return null;

  const features = t.raw(`${slug}.features`) as {
    title: string;
    description: string;
  }[];
  const faq = t.raw(`${slug}.faq`) as { question: string; answer: string }[];

  return (
    <div className={className}>
      <ServiceHero
        badge={t(`${slug}.heroBadge`)}
        title={t(`${slug}.heroTitle`)}
        subtitle={t(`${slug}.heroSubtitle`)}
        deliveryTime={t(`${slug}.deliveryTime`)}
        deliveryLabel={t("deliveryLabel")}
        ctaButton={t("ctaButton")}
        icon={service.icon}
      />
      <ServiceFeatures
        badge={t("featuresBadge")}
        title={t("featuresTitle")}
        subtitle={t("featuresSubtitle")}
        features={features}
      />
      <ServiceProcess title={t("processTitle")} subtitle={t("processSubtitle")} />
      <ServiceTech
        title={t("techTitle")}
        subtitle={t("techSubtitle")}
        techStack={serviceTechStacks[slug]}
      />
      <ServiceProjects
        title={t("projectsTitle")}
        subtitle={t("projectsSubtitle")}
        projectSlugs={serviceRelatedProjects[slug]}
      />
      <ServiceFAQ title={t("faqTitle")} subtitle={t("faqSubtitle")} items={faq} />
      <TestimonialsSection />
      <ServiceCTA
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
        buttonLabel={t("ctaButton")}
        note={t("ctaNote")}
      />
    </div>
  );
}

export function getServiceStaticSlugs(): ServiceSlug[] {
  return serviceItems.map((item) => item.slug);
}

export { isServiceSlug } from "@/components/sections/services/service-items";
