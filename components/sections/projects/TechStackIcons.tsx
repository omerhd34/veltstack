"use client";

import { techItems } from "@/components/sections/tech-marquee/tech-items";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip";
import { cn } from "@/lib/utils";

interface TechStackIconsProps {
  names: string[];
  size?: "sm" | "md";
  variant?: "light" | "dark";
  emphasis?: boolean;
  wrap?: boolean;
  className?: string;
}

export function TechStackIcons({
  names,
  size = "md",
  variant = "light",
  emphasis = false,
  wrap = true,
  className,
}: TechStackIconsProps) {
  const icons = names
    .map((name) => techItems.find((item) => item.name === name))
    .filter(Boolean);

  const boxClass = emphasis
    ? "size-8 min-h-8 min-w-8 shrink-0 rounded-lg sm:size-9 sm:min-h-9 sm:min-w-9"
    : size === "sm"
      ? "size-6 min-h-6 min-w-6 shrink-0 rounded-md"
      : "size-7 min-h-7 min-w-7 shrink-0 rounded-md sm:size-8 sm:min-h-8 sm:min-w-8";

  const getIconClass = (name: string) => {
    if (name === "Google Search") {
      return size === "sm" ? "size-2.5" : "size-2.5 sm:size-3";
    }

    return size === "sm" ? "size-3.5" : "size-3.5 sm:size-4";
  };

  const variantClass =
    variant === "dark"
      ? emphasis
        ? "bg-emerald-900/90 ring-1 ring-brand-accent/45 shadow-[0_0_20px_rgb(58_107_82/0.2)] [&_svg]:text-emerald-200 hover:bg-emerald-800/90 hover:ring-brand-accent/55"
        : "bg-emerald-950/80 ring-1 ring-emerald-800/60 [&_svg]:text-emerald-300 hover:bg-emerald-900/80 hover:ring-emerald-700/70"
      : "bg-muted/80 ring-1 ring-border/80 [&_svg]:text-foreground/80 hover:bg-muted hover:ring-brand-accent/30";

  const tooltipClass =
    variant === "dark"
      ? "bg-emerald-950 text-emerald-50 ring-1 ring-emerald-800/60"
      : "bg-[#0A0A0F] text-white ring-1 ring-white/10";

  return (
    <TooltipProvider delayDuration={150}>
      <div
        className={cn(
          "flex gap-1.5",
          wrap ? "flex-wrap" : "flex-nowrap",
          className,
        )}
      >
        {icons.map((tech) => {
          const Icon = tech!.icon;
          const label = tech!.tooltip ?? tech!.name;
          return (
            <Tooltip key={tech!.name}>
              <TooltipTrigger asChild>
                <span
                  className={cn(
                    "grid cursor-default place-items-center leading-none transition-all duration-200 hover:scale-105",
                    boxClass,
                    variantClass,
                  )}
                  aria-label={label}
                >
                  <Icon
                    className={cn(getIconClass(tech!.name), "block shrink-0")}
                    aria-hidden
                  />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top" className={tooltipClass}>
                {label}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
