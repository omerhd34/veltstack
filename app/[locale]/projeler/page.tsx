import { setRequestLocale, getTranslations } from "next-intl/server"
import { SiteContainer } from "@/components/layout/SiteContainer"
import { ProjectsDetailList } from "@/components/pages/project-detail/ProjectDetailView"

interface ProjectsPageProps {
  params: Promise<{ locale: string }>
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("pages")

  return (
    <div className="bg-background py-24">
      <SiteContainer className="px-4 sm:px-6">
        <header className="max-w-2xl">
          <h1 className="font-(family-name:--font-heading) text-4xl font-bold tracking-tight">
            {t("projectsTitle")}
          </h1>
          <p className="mt-4 text-muted-foreground">{t("projectsSubtitle")}</p>
        </header>

        <ProjectsDetailList className="mt-12 space-y-6" />
      </SiteContainer>
    </div>
  )
}
