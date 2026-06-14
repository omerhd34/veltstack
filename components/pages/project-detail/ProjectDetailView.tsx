import { getTranslations } from "next-intl/server"
import {
  isProjectSlug,
  projectItems,
  type ProjectSlug,
} from "@/components/sections/projects/project-items"
import { projectDemoUrls } from "@/components/sections/projects/project-detail-config"
import { ProjectDetailCard } from "./ProjectDetailCard"

interface ProjectDetailViewProps {
  slug: ProjectSlug
  defaultExpanded?: boolean
  className?: string
}

export async function ProjectDetailView({
  slug,
  defaultExpanded = true,
  className,
}: ProjectDetailViewProps) {
  const t = await getTranslations("projectDetails")
  const tHome = await getTranslations("home")
  const project = projectItems.find((item) => item.slug === slug)

  if (!project) return null

  const title = tHome(project.titleKey)

  const features = t.raw(`${slug}.features`) as string[]
  const metrics = t.raw(`${slug}.metrics`) as { value: string; label: string }[]

  return (
    <ProjectDetailCard
      slug={slug}
      title={title}
      summary={t(`${slug}.summary`)}
      details={t(`${slug}.details`)}
      features={features}
      metrics={metrics}
      statusLabel={t("statusCompleted")}
      demoUrl={projectDemoUrls[slug]}
      defaultExpanded={defaultExpanded}
      className={className}
      labels={{
        demo: t("demo"),
        showMore: t("showMore"),
        showLess: t("showLess"),
        detailsTitle: t("detailsTitle"),
        featuresTitle: t("featuresTitle"),
        teamTitle: t("teamTitle"),
        roleTitle: t("roleTitle"),
        teamSolo: t("teamSolo"),
        roleFullStack: t("roleFullStack"),
        metricsTitle: t("metricsTitle"),
      }}
    />
  )
}

interface ProjectsDetailListProps {
  className?: string
}

export async function ProjectsDetailList({ className }: ProjectsDetailListProps) {
  return (
    <div className={className}>
      {projectItems.map((project) => (
        <ProjectDetailView
          key={project.slug}
          slug={project.slug}
          defaultExpanded={false}
        />
      ))}
    </div>
  )
}

export function getProjectStaticSlugs(): ProjectSlug[] {
  return projectItems.map((item) => item.slug)
}

export function validateProjectSlug(slug: string): slug is ProjectSlug {
  return isProjectSlug(slug)
}
