"use client"

import { useEffect, useState } from "react"
import { LuMenu } from "react-icons/lu"
import { Link } from "@/i18n/navigation"
import { useUiStore } from "@/store/uiSlice"
import { Button } from "@/components/ui/shadcn"
import { SiteContainer } from "@/components/layout/SiteContainer"
import { cn } from "@/lib/utils"
import { NavbarLogo } from "./NavbarLogo"
import { NavbarDesktopLinks } from "./NavbarDesktopLinks"
import { NavbarMobileMenu } from "./NavbarMobileMenu"
import { NavbarLangSwitcher } from "./NavbarLangSwitcher"
import { NavbarCta } from "./NavbarCta"
import { NavbarServicesMegaMenuPanel } from "./NavbarServicesMegaMenuPanel"
import { NavbarProjectsMegaMenuPanel } from "./NavbarProjectsMegaMenuPanel"
import { NavbarBlogMegaMenuPanel } from "./NavbarBlogMegaMenuPanel"

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const mobileMenuOpen = useUiStore((state) => state.mobileMenuOpen)
  const setMobileMenuOpen = useUiStore((state) => state.setMobileMenuOpen)
  const servicesMenuOpen = useUiStore((state) => state.servicesMenuOpen)
  const projectsMenuOpen = useUiStore((state) => state.projectsMenuOpen)
  const blogMenuOpen = useUiStore((state) => state.blogMenuOpen)
  const openServicesMenu = useUiStore((state) => state.openServicesMenu)
  const scheduleCloseServicesMenu = useUiStore(
    (state) => state.scheduleCloseServicesMenu
  )
  const openProjectsMenu = useUiStore((state) => state.openProjectsMenu)
  const scheduleCloseProjectsMenu = useUiStore(
    (state) => state.scheduleCloseProjectsMenu
  )
  const openBlogMenu = useUiStore((state) => state.openBlogMenu)
  const scheduleCloseBlogMenu = useUiStore(
    (state) => state.scheduleCloseBlogMenu
  )

  const megaMenuOpen = servicesMenuOpen || projectsMenuOpen || blogMenuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0.75)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background transition-[box-shadow,border-color] duration-300",
        scrolled || megaMenuOpen
          ? "border-border shadow-md"
          : "border-border/40 shadow-none",
        className
      )}
    >
      <SiteContainer className="relative flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="shrink-0 select-none transition-opacity hover:opacity-80">
          <NavbarLogo />
        </Link>

        <NavbarDesktopLinks className="absolute left-1/2 hidden -translate-x-1/2 lg:flex" />

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <NavbarLangSwitcher />
          <NavbarCta className="hidden md:inline-flex" />
          <Button
            variant="outline"
            size="icon-sm"
            type="button"
            className="rounded-full lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileMenuOpen}
          >
            <LuMenu />
          </Button>
        </div>
      </SiteContainer>

      <div
        data-state={servicesMenuOpen ? "open" : "closed"}
        className="navbar-mega-menu-panel absolute inset-x-0 top-full z-50 isolate overflow-hidden border-t border-border bg-background shadow-md"
        onMouseEnter={openServicesMenu}
        onMouseLeave={scheduleCloseServicesMenu}
        aria-hidden={!servicesMenuOpen}
      >
        <NavbarServicesMegaMenuPanel />
      </div>

      <div
        data-state={projectsMenuOpen ? "open" : "closed"}
        className="navbar-mega-menu-panel absolute inset-x-0 top-full z-50 isolate overflow-hidden border-t border-border bg-background shadow-md"
        onMouseEnter={openProjectsMenu}
        onMouseLeave={scheduleCloseProjectsMenu}
        aria-hidden={!projectsMenuOpen}
      >
        <NavbarProjectsMegaMenuPanel />
      </div>

      <div
        data-state={blogMenuOpen ? "open" : "closed"}
        className="navbar-mega-menu-panel absolute inset-x-0 top-full z-50 isolate overflow-hidden border-t border-border bg-background shadow-md"
        onMouseEnter={openBlogMenu}
        onMouseLeave={scheduleCloseBlogMenu}
        aria-hidden={!blogMenuOpen}
      >
        <NavbarBlogMegaMenuPanel />
      </div>

      <NavbarMobileMenu />
    </header>
  )
}
