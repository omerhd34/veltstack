"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface NavbarCtaProps {
  className?: string;
  onNavigate?: () => void;
}

export function NavbarCta({ className, onNavigate }: NavbarCtaProps) {
  const tNav = useTranslations("nav");

  return (
    <Link
      href="/iletisim"
      onClick={onNavigate}
      className={cn(
        "inline-flex h-9 items-center gap-1.5 rounded-full bg-[#0A0A0F] px-4 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#0A0A0F]/90 hover:shadow-md active:scale-[0.98]",
        className,
      )}
    >
      {tNav("cta")}
      <ArrowRight className="size-3.5 opacity-80" />
    </Link>
  );
}
