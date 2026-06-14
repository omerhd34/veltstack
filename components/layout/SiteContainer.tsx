import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SiteContainerProps {
  className?: string;
  children: ReactNode;
}

export function SiteContainer({ className, children }: SiteContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl", className)}>{children}</div>
  );
}
