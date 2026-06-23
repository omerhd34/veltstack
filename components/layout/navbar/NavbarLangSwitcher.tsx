"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const LOCALE_FLAGS = {
  tr: {
    src: "/images/language/turkey.png",
    alt: "Türkçe",
  },
  en: {
    src: "/images/language/united-kingdom.png",
    alt: "English",
  },
} as const;

interface NavbarLangSwitcherProps {
  className?: string;
}

export function NavbarLangSwitcher({ className }: NavbarLangSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const tNav = useTranslations("nav");

  const nextLocale = locale === "tr" ? "en" : "tr";
  const flag = LOCALE_FLAGS[locale as keyof typeof LOCALE_FLAGS];

  return (
    <Link
      href={pathname}
      locale={nextLocale}
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-full transition-transform duration-750 ease-out hover:scale-110 active:scale-95 motion-reduce:hover:scale-100",
        className,
      )}
      aria-label={nextLocale === "en" ? tNav("switchToEn") : tNav("switchToTr")}
    >
      <Image
        src={flag.src}
        alt={flag.alt}
        width={32}
        height={32}
        className="size-9 rounded-full object-cover ring-1 ring-border/60"
      />
    </Link>
  );
}
