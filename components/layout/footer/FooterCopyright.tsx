"use client";

import { useTranslations } from "next-intl";

interface FooterCopyrightProps {
  className?: string;
}

export function FooterCopyright({ className }: FooterCopyrightProps) {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <p className={`text-sm text-background/50 ${className ?? ""}`}>
      {t("copyright", { year })}
    </p>
  );
}
