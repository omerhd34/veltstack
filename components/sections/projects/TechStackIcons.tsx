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
  className?: string;
}

export function TechStackIcons({
  names,
  size = "md",
  variant = "light",
  className,
}: TechStackIconsProps) {
  const icons = names
    .map((name) => techItems.find((item) => item.name === name))
    .filter(Boolean);

  const boxClass =
    size === "sm"
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
      ? "bg-emerald-950/80 ring-1 ring-emerald-800/60 [&_svg]:text-emerald-300 hover:bg-emerald-900/80 hover:ring-emerald-700/70"
      : "bg-muted/80 ring-1 ring-border/80 [&_svg]:text-foreground/80 hover:bg-muted hover:ring-brand-accent/30";

  const tooltipClass =
    variant === "dark"
      ? "bg-emerald-950 text-emerald-50 ring-1 ring-emerald-800/60"
      : "bg-[#0A0A0F] text-white ring-1 ring-white/10";

  return (
    <TooltipProvider delayDuration={150}>
      <div className={cn("flex flex-wrap gap-1.5", className)}>
        {icons.map((tech) => {
          const Icon = tech!.icon;
          return (
            <Tooltip key={tech!.name}>
              <TooltipTrigger asChild>
                <span
                  className={cn(
                    "grid cursor-default place-items-center leading-none transition-all duration-200 hover:scale-105",
                    boxClass,
                    variantClass,
                  )}
                  aria-label={tech!.name}
                >
                  <Icon
                    className={cn(getIconClass(tech!.name), "block shrink-0")}
                    aria-hidden
                  />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top" className={tooltipClass}>
                {tech!.name}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
