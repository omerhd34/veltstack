import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { SiteContainer } from "@/components/layout/SiteContainer"
import {
  ProjectDetailView,
  getProjectStaticSlugs,
  validateProjectSlug,
} from "@/components/pages/project-detail/ProjectDetailView"

interface ProjectDetailPageProps {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return getProjectStaticSlugs().map((slug) => ({ slug }))
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  if (!validateProjectSlug(slug)) notFound()

  return (
    <div className="bg-background py-24">
      <SiteContainer className="px-4 sm:px-6">
        <ProjectDetailView slug={slug} defaultExpanded />
      </SiteContainer>
    </div>
  )
}
