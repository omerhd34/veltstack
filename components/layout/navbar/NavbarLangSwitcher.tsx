"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const LOCALES = ["tr", "en"] as const;

interface NavbarLangSwitcherProps {
  className?: string;
}

export function NavbarLangSwitcher({ className }: NavbarLangSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "relative inline-grid grid-cols-2 rounded-full border border-border bg-muted/60 p-0.5",
        className,
      )}
      role="group"
      aria-label="Dil seçimi"
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-background shadow-sm ring-1 ring-border/50 transition-transform duration-200 ease-out",
          locale === "en" && "translate-x-full",
        )}
      />
      {LOCALES.map((code) => (
        <Link
          key={code}
          href={pathname}
          locale={code}
          className={cn(
            "relative z-10 inline-flex min-w-9 items-center justify-center rounded-full px-3 py-1 text-xs tracking-wide transition-colors",
            locale === code
              ? "font-semibold text-foreground"
              : "font-medium text-muted-foreground hover:text-foreground/75",
          )}
          aria-current={locale === code ? "true" : undefined}
        >
          {code.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
