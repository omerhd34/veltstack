"use client"

import { LuArrowRight } from "react-icons/lu"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/shadcn"
import { SiteContainer } from "@/components/layout/SiteContainer"
import { ServiceCard } from "@/components/sections/services/ServiceCard"
import { projectItems } from "@/components/sections/projects/project-items"
import { projectTechStacks } from "@/components/sections/projects/project-detail-config"
import { useUiStore } from "@/store/uiSlice"

export function NavbarProjectsMegaMenuPanel() {
  const tHome = useTranslations("home")
  const setProjectsMenuOpen = useUiStore((state) => state.setProjectsMenuOpen)

  const cards = projectItems.map((project) => ({
    href: project.href,
    title: tHome(project.titleKey),
    description: tHome(project.descKey),
    techStack: projectTechStacks[project.slug],
    icon: project.icon,
  }))

  return (
    <SiteContainer className="py-10">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
        <div className="mega-menu-intro max-w-md">
          <h2 className="font-(family-name:--font-heading) text-2xl font-bold leading-tight tracking-tight md:text-3xl">
            {tHome("projectsHeadline")}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {tHome("projectsIntro")}
          </p>
          <Button
            size="lg"
            className="mt-6 rounded-full bg-[#0A0A0F] px-8 text-white hover:bg-[#0A0A0F]/90"
            asChild
          >
            <Link href="/projeler" onClick={() => setProjectsMenuOpen(false)}>
              {tHome("projectsCta")}
              <LuArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-3">
          {cards.map((project) => (
            <div key={project.href} className="mega-menu-card">
              <ServiceCard
                compact
                onNavigate={() => setProjectsMenuOpen(false)}
                {...project}
              />
            </div>
          ))}
        </div>
      </div>
    </SiteContainer>
  )
}
