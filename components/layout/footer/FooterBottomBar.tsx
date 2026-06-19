"use client";

import { FooterLogo } from "./FooterLogo";
import { FooterCopyright } from "./FooterCopyright";

interface FooterBottomBarProps {
  className?: string;
}

export function FooterBottomBar({ className }: FooterBottomBarProps) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-8 ${className ?? ""}`}
    >
      <FooterLogo />
      <FooterCopyright className="text-right" />
    </div>
  );
}
