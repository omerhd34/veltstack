"use client"

import { useState } from "react"
import { LuChevronDown } from "react-icons/lu"
import { useTranslations } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { navServiceItems, type NavServiceKey } from "./nav-services"
import { navProjectItems, type NavProjectKey } from "./nav-projects"
import { navItemClass } from "./nav-link-styles"

interface NavbarLinksProps {
  className?: string
  orientation?: "horizontal" | "vertical"
  onNavigate?: () => void
}

export function NavbarLinks({
  className,
  orientation = "horizontal",
  onNavigate,
}: NavbarLinksProps) {
  const tNav = useTranslations("nav")
  const pathname = usePathname()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)

  const serviceLabels: Record<NavServiceKey, string> = {
    serviceCorporate: tNav("serviceCorporate"),
    serviceEcommerce: tNav("serviceEcommerce"),
    serviceMobile: tNav("serviceMobile"),
    serviceSeo: tNav("serviceSeo"),
    servicePortfolio: tNav("servicePortfolio"),
    serviceApi: tNav("serviceApi"),
  }

  const projectLabels: Record<NavProjectKey, string> = {
    projectIqfinans: tNav("projectIqfinans"),
    projectYazici: tNav("projectYazici"),
    projectFablessi: tNav("projectFablessi"),
    projectUzmanPsikolog: tNav("projectUzmanPsikolog"),
  }

  const links = [
    { href: "/blog", label: tNav("blog") },
    { href: "/hakkimda", label: tNav("about") },
    { href: "/iletisim", label: tNav("contact") },
  ]

  const isVertical = orientation === "vertical"

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  const servicesActive = pathname === "/hizmetler" || pathname.startsWith("/hizmetler/")
  const projectsActive = pathname === "/projeler" || pathname.startsWith("/projeler/")

  if (!isVertical) {
    return null
  }

  return (
    <nav className={className} aria-label="Ana navigasyon">
      <ul className="flex w-full flex-col gap-1.5">
        <li>
          <div className="flex items-center gap-1">
            <Link
              href="/hizmetler"
              onClick={onNavigate}
              className={cn(navItemClass(servicesActive, "mobile"), "flex-1")}
            >
              {tNav("services")}
            </Link>
            <button
              type="button"
              onClick={() => setServicesOpen((open) => !open)}
              className="flex size-11 shrink-0 items-center justify-center rounded-xl text-foreground/70 transition-colors hover:bg-muted/60 hover:text-foreground"
              aria-expanded={servicesOpen}
              aria-label={tNav("services")}
            >
              <LuChevronDown
                className={cn(
                  "size-4 transition-transform duration-200",
                  servicesOpen && "rotate-180"
                )}
              />
            </button>
          </div>
          {servicesOpen && (
            <ul className="mt-1.5 ml-2 flex flex-col gap-1 border-l-2 border-border/80 pl-3">
              <li>
                <Link
                  href="/hizmetler"
                  onClick={onNavigate}
                  className={navItemClass(isActive("/hizmetler"), "mobile-nested")}
                >
                  {tNav("servicesAll")}
                </Link>
              </li>
              {navServiceItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className={navItemClass(isActive(item.href), "mobile-nested")}
                  >
                    {serviceLabels[item.navKey]}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <div className="flex items-center gap-1">
            <Link
              href="/projeler"
              onClick={onNavigate}
              className={cn(navItemClass(projectsActive, "mobile"), "flex-1")}
            >
              {tNav("projects")}
            </Link>
            <button
              type="button"
              onClick={() => setProjectsOpen((open) => !open)}
              className="flex size-11 shrink-0 items-center justify-center rounded-xl text-foreground/70 transition-colors hover:bg-muted/60 hover:text-foreground"
              aria-expanded={projectsOpen}
              aria-label={tNav("projects")}
            >
              <LuChevronDown
                className={cn(
                  "size-4 transition-transform duration-200",
                  projectsOpen && "rotate-180"
                )}
              />
            </button>
          </div>
          {projectsOpen && (
            <ul className="mt-1.5 ml-2 flex flex-col gap-1 border-l-2 border-border/80 pl-3">
              <li>
                <Link
                  href="/projeler"
                  onClick={onNavigate}
                  className={navItemClass(isActive("/projeler"), "mobile-nested")}
                >
                  {tNav("projectsAll")}
                </Link>
              </li>
              {navProjectItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className={navItemClass(isActive(item.href), "mobile-nested")}
                  >
                    {projectLabels[item.navKey]}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onNavigate}
              className={navItemClass(isActive(link.href), "mobile")}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
