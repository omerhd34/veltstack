import type { IconType } from "react-icons";
import { LuClock, LuLayers, LuSparkles } from "react-icons/lu";
import { cn } from "@/lib/utils";

const highlightIcons: IconType[] = [LuSparkles, LuClock, LuLayers];

interface CTAHighlightsProps {
  points: [string, string, string];
  className?: string;
}

export function CTAHighlights({ points, className }: CTAHighlightsProps) {
  return (
    <ul
      className={cn(
        "mt-10 grid gap-3 sm:grid-cols-3 sm:gap-4",
        className,
      )}
    >
      {points.map((label, index) => {
        const Icon = highlightIcons[index];

        return (
          <li
            key={label}
            className="flex items-center gap-3 rounded-2xl border border-emerald-800/40 bg-[#0a1612]/60 px-4 py-3.5 backdrop-blur-sm transition-colors hover:border-emerald-600/35 hover:bg-[#0c1e18]/70 sm:flex-col sm:items-center sm:gap-2.5 sm:px-4 sm:py-5 sm:text-center"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-800/35 text-emerald-300 ring-1 ring-emerald-700/45 sm:size-10">
              <Icon className="size-4 sm:size-4.5" strokeWidth={1.75} aria-hidden />
            </span>
            <span className="text-sm font-medium leading-snug text-emerald-50/80">
              {label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
