import { FooterLogo } from "./FooterLogo"
import { FooterLinks } from "./FooterLinks"
import { FooterSocial } from "./FooterSocial"
import { FooterCopyright } from "./FooterCopyright"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`border-t border-border bg-card ${className ?? ""}`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <FooterLogo className="text-lg font-bold" />
          <FooterLinks />
          <FooterSocial />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  )
}
