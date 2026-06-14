"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

interface FooterLinksProps {
  className?: string
}

export function FooterLinks({ className }: FooterLinksProps) {
  const t = useTranslations("nav")

  const links = [
    { href: "/hizmetler", label: t("services") },
    { href: "/projeler", label: t("projects") },
    { href: "/blog", label: t("blog") },
    { href: "/iletisim", label: t("contact") },
  ]

  return (
    <nav className={className}>
      <ul className="flex flex-wrap gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
