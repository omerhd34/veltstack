import { cn } from "@/lib/utils";

const slowTransition =
  "transition-all duration-1000 ease-in-out motion-reduce:transition-none";

interface CardIndexNumberProps {
  index: number;
  theme?: "light" | "dark";
  reveal?: "always" | "hover";
  className?: string;
}

export function CardIndexNumber({
  index,
  theme = "light",
  reveal = "always",
  className,
}: CardIndexNumberProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute right-5 top-5 font-mono text-3xl font-bold leading-none tracking-tight",
        slowTransition,
        theme === "light"
          ? reveal === "hover"
            ? "text-muted/30 opacity-0 group-hover:opacity-100 group-hover:text-brand-accent/15"
            : "text-brand-accent/15 group-hover:text-brand-accent/30"
          : "text-white/15 group-hover:text-brand-accent/40",
        className,
      )}
    >
      {String(index).padStart(2, "0")}
    </span>
  );
}
