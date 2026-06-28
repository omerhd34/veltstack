"use client";

import { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/shadcn/hover-card";

export interface HeroStat {
  value: string;
  label: string;
  hint: string;
}

interface HeroStatsCardsProps {
  stats: HeroStat[];
}

export function HeroStatsCards({ stats }: HeroStatsCardsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat, index) => (
        <div key={stat.label} className="block w-full">
          <HoverCard
            open={openIndex === index}
            onOpenChange={(open) => {
              if (open) {
                setOpenIndex(index);
              } else if (openIndex === index) {
                setOpenIndex(null);
              }
            }}
            openDelay={150}
            closeDelay={100}
          >
            <HoverCardTrigger asChild>
              <button
                type="button"
                className="w-full rounded-2xl border border-emerald-900/45 bg-[#0a1612]/70 px-4 py-4 text-left backdrop-blur-sm transition-colors hover:border-emerald-700/60 hover:bg-[#0d1c17]/80 sm:px-5 sm:py-5"
              >
                <p className="font-(family-name:--font-heading) text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-emerald-300/50 sm:text-[0.6875rem]">
                  {stat.label}
                </p>
              </button>
            </HoverCardTrigger>
            <HoverCardContent
              side="top"
              align="center"
              className="w-(--radix-hover-card-trigger-width) max-w-none border-emerald-900/50 bg-[#0a1612] p-4 text-emerald-50"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300/70">
                {stat.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-emerald-50/75">
                {stat.hint}
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
      ))}
    </div>
  );
}
