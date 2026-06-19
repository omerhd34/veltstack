import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FooterColumnProps {
  title: string;
  className?: string;
  children: ReactNode;
}

export function FooterColumn({ title, className, children }: FooterColumnProps) {
  return (
    <div className={cn("min-w-0", className)}>
      <h3 className="mb-5 text-sm font-semibold tracking-wide text-background">
        {title}
      </h3>
      {children}
    </div>
  );
}
