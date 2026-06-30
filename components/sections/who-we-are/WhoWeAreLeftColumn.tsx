"use client";

import { WhoWeAreStats, type WhoWeAreStat } from "./WhoWeAreStats";

interface WhoWeAreLeftColumnProps {
  badge: string;
  headline: string;
  headlineAccent: string;
  stats: readonly WhoWeAreStat[];
}

export function WhoWeAreLeftColumn({
  badge,
  headline,
  headlineAccent,
  stats,
}: WhoWeAreLeftColumnProps) {
  return (
    <div className="flex h-full w-full min-w-0 flex-col items-start">
      <span className="inline-flex w-fit items-center rounded-full border border-brand-accent/25 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent shadow-[0_2px_12px_rgb(58_107_82/0.08)] backdrop-blur-sm">
        {badge}
      </span>

      <h2
        id="who-we-are-title"
        className="mt-8 w-full font-(family-name:--font-heading) text-4xl font-bold leading-[1.08] tracking-tight text-[#0A0A0F] md:text-5xl lg:text-[3.25rem]"
      >
        {headline}
        <br />
        <span className="text-brand-accent">{headlineAccent}</span>
      </h2>

      <div aria-hidden className="min-h-0 flex-1" />

      <WhoWeAreStats stats={stats} />
    </div>
  );
}
