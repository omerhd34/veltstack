import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  title: string;
  description: string;
  step: number;
  icon: IconType;
  variant?: "light" | "dark";
}

export function ProcessStep({
  title,
  description,
  step,
  icon: Icon,
  variant = "light",
}: ProcessStepProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "group relative flex h-full min-h-56 flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-300 md:p-6",
        isDark
          ? "border-emerald-700/35 bg-[rgb(8_28_22/0.55)] backdrop-blur-md hover:border-emerald-400/35 hover:bg-[rgb(12_36_28/0.65)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.28)]"
          : "border-border/70 bg-white/90 shadow-sm hover:border-brand-accent/50 hover:shadow-md",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-xl ring-1 transition-colors",
            isDark
              ? "bg-emerald-800/40 text-emerald-300 ring-emerald-700/50 group-hover:bg-emerald-700/50"
              : "bg-brand-accent/10 text-brand-accent ring-brand-accent/20 group-hover:bg-brand-accent group-hover:text-brand-accent-foreground",
          )}
        >
          <Icon className="size-5" strokeWidth={1.75} aria-hidden />
        </div>
        <span
          aria-hidden
          className={cn(
            "font-mono text-sm font-semibold",
            isDark ? "text-emerald-500/50" : "text-brand-accent/30",
          )}
        >
          {String(step).padStart(2, "0")}
        </span>
      </div>
      <h3
        className={cn(
          "mt-4 font-(family-name:--font-heading) text-base font-bold leading-tight tracking-tight md:text-lg",
          isDark ? "text-white" : "text-[#0A0A0F]",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-2.5 flex-1 text-[0.875rem] leading-[1.7]",
          isDark ? "text-emerald-50/55" : "text-foreground/68",
        )}
      >
        {description}
      </p>
    </div>
  );
}
