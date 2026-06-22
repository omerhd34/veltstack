"use client";

import { LuCompass, LuRocket } from "react-icons/lu";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";

interface HeroCTAProps {
  primary: string;
  secondary: string;
  className?: string;
}

export function HeroCTA({ primary, secondary, className }: HeroCTAProps) {
  return (
    <div className={`flex flex-wrap justify-start gap-4 ${className ?? ""}`}>
      <PrimaryCtaLink
        href="/iletisim"
        variant="accent"
        size="md"
        showArrow={false}
        leadingIcon={<LuRocket className="size-5" aria-hidden />}
      >
        {primary}
      </PrimaryCtaLink>
      <PrimaryCtaLink
        href="/hizmetler"
        variant="outline"
        size="md"
        showArrow={false}
        className="border-white/20 bg-white/10 hover:border-white/30 hover:bg-white/18"
        leadingIcon={<LuCompass className="size-5" aria-hidden />}
      >
        {secondary}
      </PrimaryCtaLink>
    </div>
  );
}
