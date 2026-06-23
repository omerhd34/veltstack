"use client";

import { BorderTrace } from "@/components/ui/BorderTrace";
import { cn } from "@/lib/utils";

interface ContactFormFieldShellProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

export function ContactFormFieldShell({
  children,
  className,
  active,
}: ContactFormFieldShellProps) {
  return (
    <div
      className={cn(
        "group relative overflow-visible rounded-xl",
        "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent",
        className,
      )}
      data-active={active ? "true" : undefined}
    >
      <BorderTrace loop trigger="focus" radius={12} durationSec={4} active={active} />
      {children}
    </div>
  );
}
