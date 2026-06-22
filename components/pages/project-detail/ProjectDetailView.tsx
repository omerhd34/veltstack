import { getTranslations } from "next-intl/server";
import {
  isProjectSlug,
  projectItems,
  type ProjectSlug,
} from "@/components/sections/projects/project-items";
import {
  projectCoverGradients,
  projectDemoUrls,
  projectImageUrls,
} from "@/components/sections/projects/project-detail-config";
import { ServiceCTA } from "@/components/pages/service-detail/ServiceCTA";
import { projectRelatedServices } from "./project-detail-config";
import { ProjectContent } from "./ProjectContent";
import { ProjectFeatures } from "./ProjectFeatures";
import { ProjectHero } from "./ProjectHero";
import { ProjectRelated } from "./ProjectRelated";
import { ProjectDetailCard } from "./ProjectDetailCard";

interface ProjectDetailViewProps {
  slug: ProjectSlug;
  defaultExpanded?: boolean;
  className?: string;
  variant?: "page" | "card";
}

export async function ProjectDetailView({
  slug,
  defaultExpanded = true,
  className,
  variant = "page",
}: ProjectDetailViewProps) {
  const t = await getTranslations("projectDetails");
  const project = projectItems.find((item) => item.slug === slug);

  if (!project) return null;

  const features = t.raw(`${slug}.features`) as {
    title: string;
    description: string;
  }[];
  const metrics = t.raw(`${slug}.metrics`) as {
    value: string;
    label: string;
  }[];
  if (variant === "card") {
    return (
      <ProjectDetailCard
        title={t(`${slug}.heroTitle`)}
        summary={t(`${slug}.summary`)}
        details={t(`${slug}.details`)}
        features={features.map((feature) => feature.title)}
        metrics={metrics}
        demoUrl={projectDemoUrls[slug]}
        defaultExpanded={defaultExpanded}
        className={className}
        labels={{
          demo: t("demo"),
          showMore: t("showMore"),
          showLess: t("showLess"),
          detailsTitle: t("detailsTitle"),
          featuresTitle: t("featuresTitle"),
          metricsTitle: t("metricsTitle"),
        }}
      />
    );
  }

  return (
    <div className={className}>
      <ProjectHero
        badge={t(`${slug}.heroBadge`)}
        title={t(`${slug}.heroTitle`)}
        subtitle={t(`${slug}.heroSubtitle`)}
        metrics={metrics}
        demoUrl={projectDemoUrls[slug]}
        demoLabel={t("demo")}
        imageUrl={projectImageUrls[slug]}
        coverGradient={projectCoverGradients[slug]}
        icon={project.icon}
      />
      <ProjectContent
        badge={t("overviewBadge")}
        challengeTitle={t("challengeTitle")}
        challengeText={t(`${slug}.challengeText`)}
        solutionTitle={t("solutionTitle")}
        solutionText={t(`${slug}.solutionText`)}
        detailsTitle={t("detailsTitle")}
        details={t(`${slug}.details`)}
      />
      <ProjectFeatures
        badge={t("featuresBadge")}
        title={t("featuresTitle")}
        subtitle={t("featuresSubtitle")}
        features={features}
      />
      <ProjectRelated
        title={t("relatedServicesTitle")}
        subtitle={t("relatedServicesSubtitle")}
        serviceSlugs={projectRelatedServices[slug]}
      />
      <ServiceCTA
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
        buttonLabel={t("ctaButton")}
        note={t("ctaNote")}
      />
    </div>
  );
}

interface ProjectsDetailListProps {
  className?: string;
}

export async function ProjectsDetailList({
  className,
}: ProjectsDetailListProps) {
  return (
    <div className={className}>
      {projectItems
        .filter((project) => !project.external)
        .map((project) => (
        <ProjectDetailView
          key={project.slug}
          slug={project.slug}
          defaultExpanded={false}
          variant="card"
        />
      ))}
    </div>
  );
}

export function getProjectStaticSlugs(): ProjectSlug[] {
  return projectItems
    .filter((item) => !item.external)
    .map((item) => item.slug);
}

export function validateProjectSlug(slug: string): slug is ProjectSlug {
  const project = projectItems.find((item) => item.slug === slug);
  return isProjectSlug(slug) && !project?.external;
}
