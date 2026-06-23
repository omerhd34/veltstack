"use client";

import { useEffect, useState } from "react";

export interface WhoWeAreStat {
  target: number;
  suffix: string;
  label: string;
}

interface WhoWeAreStatsProps {
  stats: readonly WhoWeAreStat[];
  active: boolean;
}

const DURATION_MS = 2200;

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / DURATION_MS, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, active]);

  return active ? count : 0;
}

function AnimatedStat({
  target,
  suffix,
  label,
  active,
}: WhoWeAreStat & { active: boolean }) {
  const count = useCountUp(target, active);

  return (
    <div>
      <p className="font-(family-name:--font-heading) text-3xl font-bold text-[#0A0A0F] md:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-xs font-medium text-muted-foreground">{label}</p>
    </div>
  );
}

export function WhoWeAreStats({ stats, active }: WhoWeAreStatsProps) {
  return (
    <div
      className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10"
      aria-live="polite"
    >
      {stats.map((stat) => (
        <AnimatedStat
          key={`${stat.label}-${active}`}
          {...stat}
          active={active}
        />
      ))}
    </div>
  );
}
