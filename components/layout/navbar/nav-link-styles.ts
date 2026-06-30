import { cn } from "@/lib/utils";

export function navItemClass(
  active: boolean,
  variant: "desktop" | "mobile" | "mobile-nested" = "desktop",
) {
  if (variant === "desktop") {
    return cn(
      "group relative inline-flex h-12 items-center gap-1 px-4 text-base font-semibold tracking-[-0.01em] transition-colors duration-200",
      active ? "text-foreground" : "text-foreground/70 hover:text-foreground",
    );
  }

  const base = {
    mobile:
      "flex w-full items-center rounded-xl px-4 py-3 text-base font-medium transition-colors",
    "mobile-nested":
      "flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
  }[variant];

  return cn(
    base,
    active
      ? "bg-muted font-semibold text-foreground"
      : "text-foreground/80 hover:bg-muted/60 hover:text-foreground",
  );
}

export function navItemLabelClass(active: boolean) {
  return cn(
    "relative inline-flex h-full items-center",
    "after:absolute after:bottom-2 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-(--border-trace-stroke) after:transition-opacity after:duration-200",
    active
      ? "after:opacity-100"
      : "after:opacity-0 group-hover:after:opacity-100",
  );
}
