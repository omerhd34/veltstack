"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/store/uiSlice";
import { navItemClass, navItemLabelClass } from "./nav-link-styles";

interface NavbarDesktopLinksProps {
  className?: string;
}

export function NavbarDesktopLinks({ className }: NavbarDesktopLinksProps) {
  const tNav = useTranslations("nav");
  const pathname = usePathname();
  const servicesMenuOpen = useUiStore((state) => state.servicesMenuOpen);
  const projectsMenuOpen = useUiStore((state) => state.projectsMenuOpen);
  const setServicesMenuOpen = useUiStore((state) => state.setServicesMenuOpen);
  const setProjectsMenuOpen = useUiStore((state) => state.setProjectsMenuOpen);
  const openServicesMenu = useUiStore((state) => state.openServicesMenu);
  const scheduleCloseServicesMenu = useUiStore(
    (state) => state.scheduleCloseServicesMenu,
  );
  const openProjectsMenu = useUiStore((state) => state.openProjectsMenu);
  const scheduleCloseProjectsMenu = useUiStore(
    (state) => state.scheduleCloseProjectsMenu,
  );

  const trailingLinks = [
    { href: "/hakkimda", label: tNav("about") },
    { href: "/blog", label: tNav("blog") },
    { href: "/iletisim", label: tNav("contact") },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const servicesActive =
    servicesMenuOpen ||
    pathname === "/hizmetler" ||
    pathname.startsWith("/hizmetler/");

  const projectsActive =
    projectsMenuOpen ||
    pathname === "/projeler" ||
    pathname.startsWith("/projeler/");

  useEffect(() => {
    setServicesMenuOpen(false);
    setProjectsMenuOpen(false);
  }, [pathname, setServicesMenuOpen, setProjectsMenuOpen]);

  return (
    <nav
      className={cn("items-center gap-0.5 xl:gap-1", className)}
      aria-label="Ana navigasyon"
    >
      <div
        className="relative h-full"
        onMouseEnter={openServicesMenu}
        onMouseLeave={scheduleCloseServicesMenu}
        onFocusCapture={openServicesMenu}
      >
        <Link
          href="/hizmetler"
          aria-expanded={servicesMenuOpen}
          aria-haspopup="true"
          className={navItemClass(servicesActive)}
        >
          <span className={navItemLabelClass(servicesActive)}>
            {tNav("services")}
          </span>
        </Link>
      </div>

      <div
        className="relative h-full"
        onMouseEnter={openProjectsMenu}
        onMouseLeave={scheduleCloseProjectsMenu}
        onFocusCapture={openProjectsMenu}
      >
        <Link
          href="/projeler"
          aria-expanded={projectsMenuOpen}
          aria-haspopup="true"
          className={navItemClass(projectsActive)}
        >
          <span className={navItemLabelClass(projectsActive)}>
            {tNav("projects")}
          </span>
        </Link>
      </div>

      {trailingLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={navItemClass(isActive(link.href))}
        >
          <span className={navItemLabelClass(isActive(link.href))}>
            {link.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
