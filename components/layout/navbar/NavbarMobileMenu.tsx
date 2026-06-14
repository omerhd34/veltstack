"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useUiStore } from "@/store/uiSlice";
import { Button } from "@/components/ui/shadcn";
import { cn } from "@/lib/utils";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarCta } from "./NavbarCta";
import { NavbarLogo } from "./NavbarLogo";

interface NavbarMobileMenuProps {
  className?: string;
}

export function NavbarMobileMenu({ className }: NavbarMobileMenuProps) {
  const mobileMenuOpen = useUiStore((state) => state.mobileMenuOpen);
  const setMobileMenuOpen = useUiStore((state) => state.setMobileMenuOpen);

  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-100 lg:hidden",
        mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none",
        className,
      )}
      aria-hidden={!mobileMenuOpen}
    >
      <div
        className={cn(
          "absolute inset-0 bg-foreground/25 backdrop-blur-sm transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100" : "opacity-0",
        )}
        onClick={closeMenu}
      />
      <div
        className={cn(
          "absolute inset-y-0 right-0 flex w-full max-w-[min(100%,24rem)] flex-col bg-background shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-4 sm:px-5">
          <NavbarLogo />
          <Button
            variant="ghost"
            size="icon-sm"
            type="button"
            className="size-9 rounded-full"
            onClick={closeMenu}
            aria-label="Menüyü kapat"
          >
            <X className="size-5" />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-5 sm:px-4">
          <NavbarLinks orientation="vertical" onNavigate={closeMenu} />
        </div>
        <div className="shrink-0 border-t border-border p-4">
          <NavbarCta
            className="h-11 w-full justify-center"
            onNavigate={closeMenu}
          />
        </div>
      </div>
    </div>
  );
}
