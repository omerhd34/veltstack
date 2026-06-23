"use client";

import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WhoWeAreStats, type WhoWeAreStat } from "./WhoWeAreStats";

interface WhoWeAreLeftColumnProps {
  badge: string;
  heading: ReactNode;
  stats: readonly WhoWeAreStat[];
}

export function WhoWeAreLeftColumn({
  badge,
  heading,
  stats,
}: WhoWeAreLeftColumnProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2, repeat: true });

  return (
    <div className="min-w-0">
      <span
        ref={ref as React.RefObject<HTMLSpanElement | null>}
        className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent"
      >
        {badge}
      </span>

      {heading}

      <WhoWeAreStats stats={stats} active={isVisible} />
    </div>
  );
}
