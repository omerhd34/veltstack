import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";

type SectionDecorTone = "accent" | "accent-muted" | "on-dark" | "on-dark-muted";

interface SectionDecorIconProps {
  icon: IconType;
  className?: string;
  tone?: SectionDecorTone;
  strokeWidth?: number;
  size?: "sm" | "md" | "lg";
}

const toneClasses: Record<SectionDecorTone, string> = {
  accent: "text-brand-accent/30",
  "accent-muted": "text-brand-accent/18",
  "on-dark": "text-white/12",
  "on-dark-muted": "text-emerald-400/15",
};

const sizeClasses = {
  sm: "size-12",
  md: "size-16",
  lg: "size-20 xl:size-24",
};

export function SectionDecorIcon({
  icon: Icon,
  className,
  tone = "accent-muted",
  strokeWidth = 1.25,
  size = "lg",
}: SectionDecorIconProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute hidden lg:block",
        className,
      )}
    >
      <Icon
        aria-hidden
        strokeWidth={strokeWidth}
        className={cn(
          sizeClasses[size],
          toneClasses[tone],
          "animate-section-decor-spin",
        )}
      />
    </span>
  );
}
