"use client";

import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface WhoWeAreAuroraLayerProps {
  className?: string;
}

export function WhoWeAreAuroraLayer({ className }: WhoWeAreAuroraLayerProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className="after:animate-aurora pointer-events-none absolute inset-[-10px] opacity-40 blur-md filter will-change-transform [--aurora:repeating-linear-gradient(100deg,#3a6b52_10%,#5d9b7a_15%,#7ab896_20%,#a8d5c2_25%,#4a8268_30%)] [--white-gradient:repeating-linear-gradient(100deg,#edf6f1_0%,#edf6f1_7%,transparent_10%,transparent_12%,#edf6f1_16%)] [background-image:var(--white-gradient),var(--aurora)] bg-size-[300%,200%] bg-position-[50%_50%,50%_50%] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:bg-size-[200%,100%] after:mix-blend-soft-light after:content-['']"
        style={
          {
            maskImage:
              "radial-gradient(ellipse 80% 60% at 30% 20%, black 15%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 30% 20%, black 15%, transparent 72%)",
          } as CSSProperties
        }
      />
    </div>
  );
}
