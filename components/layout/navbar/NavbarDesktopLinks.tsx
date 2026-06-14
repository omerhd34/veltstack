"use client"

import { ChevronDown } from "lucide-react"
import { useEffect } from "react"
import { useTranslations } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { useUiStore } from "@/store/uiSlice"
import { navItemClass, navItemLabelClass } from "./nav-link-styles"

interface NavbarDesktopLinksProps {
  className?: string
}

export function NavbarDesktopLinks({ className }: NavbarDesktopLinksProps) {
  const tNav = useTranslations("nav")
  const pathname = usePathname()
  const servicesMenuOpen = useUiStore((state) => state.servicesMenuOpen)
  const projectsMenuOpen = useUiStore((state) => state.projectsMenuOpen)
  const setServicesMenuOpen = useUiStore((state) => state.setServicesMenuOpen)
  const setProjectsMenuOpen = useUiStore((state) => state.setProjectsMenuOpen)
  const openServicesMenu = useUiStore((state) => state.openServicesMenu)
  const scheduleCloseServicesMenu = useUiStore(
    (state) => state.scheduleCloseServicesMenu
  )
  const openProjectsMenu = useUiStore((state) => state.openProjectsMenu)
  const scheduleCloseProjectsMenu = useUiStore(
    (state) => state.scheduleCloseProjectsMenu
  )

  const trailingLinks = [
    { href: "/blog", label: tNav("blog") },
    { href: "/hakkimda", label: tNav("about") },
    { href: "/iletisim", label: tNav("contact") },
  ]

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`)

  const servicesActive =
    servicesMenuOpen ||
    pathname === "/hizmetler" ||
    pathname.startsWith("/hizmetler/")

  const projectsActive =
    projectsMenuOpen ||
    pathname === "/projeler" ||
    pathname.startsWith("/projeler/")

  useEffect(() => {
    setServicesMenuOpen(false)
    setProjectsMenuOpen(false)
  }, [pathname, setServicesMenuOpen, setProjectsMenuOpen])

  return (
    <nav
      className={cn("items-center gap-0.5 xl:gap-1", className)}
      aria-label="Ana navigasyon"
    >
      <Link href="/" className={navItemClass(isActive("/"))}>
        <span className={navItemLabelClass(isActive("/"))}>{tNav("home")}</span>
      </Link>

      <div
        className="relative h-full"
        onMouseEnter={openServicesMenu}
        onMouseLeave={scheduleCloseServicesMenu}
        onFocusCapture={openServicesMenu}
      >
        <button
          type="button"
          aria-expanded={servicesMenuOpen}
          aria-haspopup="true"
          onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
          className={navItemClass(servicesActive)}
        >
          <span className={navItemLabelClass(servicesActive)}>
            {tNav("services")}
          </span>
          <ChevronDown
            className={cn(
              "size-3.5 shrink-0 text-foreground/60 transition-transform duration-300 ease-out",
              servicesMenuOpen && "rotate-180"
            )}
          />
        </button>
      </div>

      <div
        className="relative h-full"
        onMouseEnter={openProjectsMenu}
        onMouseLeave={scheduleCloseProjectsMenu}
        onFocusCapture={openProjectsMenu}
      >
        <button
          type="button"
          aria-expanded={projectsMenuOpen}
          aria-haspopup="true"
          onClick={() => setProjectsMenuOpen(!projectsMenuOpen)}
          className={navItemClass(projectsActive)}
        >
          <span className={navItemLabelClass(projectsActive)}>
            {tNav("projects")}
          </span>
          <ChevronDown
            className={cn(
              "size-3.5 shrink-0 text-foreground/60 transition-transform duration-300 ease-out",
              projectsMenuOpen && "rotate-180"
            )}
          />
        </button>
      </div>

      {trailingLinks.map((link) => (
        <Link key={link.href} href={link.href} className={navItemClass(isActive(link.href))}>
          <span className={navItemLabelClass(isActive(link.href))}>
            {link.label}
          </span>
        </Link>
      ))}
    </nav>
  )
}
