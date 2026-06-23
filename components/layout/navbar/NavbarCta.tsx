"use client";

import { LuMessageCircle } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";
import { cn } from "@/lib/utils";

interface NavbarCtaProps {
  className?: string;
  onNavigate?: () => void;
}

export function NavbarCta({ className, onNavigate }: NavbarCtaProps) {
  const tNav = useTranslations("nav");

  return (
    <PrimaryCtaLink
      href="/iletisim"
      size="md"
      showArrow={false}
      trailingIcon={<LuMessageCircle className="size-4.5" aria-hidden />}
      onNavigate={onNavigate}
      className={cn(className)}
    >
      {tNav("cta")}
    </PrimaryCtaLink>
  );
}
