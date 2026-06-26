"use client"

import { LuEye } from "react-icons/lu"
import { useTranslations } from "next-intl"
import { SiteContainer } from "@/components/layout/SiteContainer"
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink"
import { ServiceCard } from "@/components/sections/services/ServiceCard"
import { projectItems } from "@/components/sections/projects/project-items"
import { useUiStore } from "@/store/uiSlice"
import { NavbarMegaMenuIntroColumn } from "./NavbarMegaMenuIntroColumn"

export function NavbarProjectsMegaMenuPanel() {
  const tHome = useTranslations("home")
  const tNav = useTranslations("nav")
  const setProjectsMenuOpen = useUiStore((state) => state.setProjectsMenuOpen)

  const cards = projectItems.map((project) => ({
    href: project.href,
    title: tHome(project.titleKey),
    description: tNav(project.navDescKey),
    icon: project.icon,
  }))

  return (
    <SiteContainer className="py-10">
      <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
        <NavbarMegaMenuIntroColumn
          headline={tHome("projectsHeadline")}
          intro={tNav("projectsMegaMenuIntro")}
          introLines={12}
        >
          <PrimaryCtaLink
            href="/projeler"
            wrapperClassName="origin-left"
            showArrow={false}
            leadingIcon={<LuEye className="size-5" aria-hidden />}
            onNavigate={() => setProjectsMenuOpen(false)}
          >
            {tHome("projectsCta")}
          </PrimaryCtaLink>
        </NavbarMegaMenuIntroColumn>
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
