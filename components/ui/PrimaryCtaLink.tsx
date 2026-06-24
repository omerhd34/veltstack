"use client";

import { type ReactNode } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { cn } from "@/lib/utils";

const slowTransition =
  "transition-all duration-1000 ease-in-out motion-reduce:transition-none";

type PrimaryCtaLinkSize = "sm" | "md" | "lg";
type PrimaryCtaLinkVariant = "default" | "accent" | "outline";

interface PrimaryCtaLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  size?: PrimaryCtaLinkSize;
  variant?: PrimaryCtaLinkVariant;
  showArrow?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  onNavigate?: () => void;
}

const sizeClasses: Record<PrimaryCtaLinkSize, string> = {
  sm: "h-9 gap-1.5 px-4 text-sm",
  md: "h-11 gap-2 px-6 text-base",
  lg: "h-12 gap-2 px-8 text-base",
};

const arrowSizeClasses: Record<PrimaryCtaLinkSize, string> = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-4",
};

const iconTransition =
  "transition-[color,stroke-width] duration-1000 ease-in-out motion-reduce:transition-none";

const iconHoverClasses = cn(
  "text-white stroke-[2.25]",
  iconTransition,
  "group-hover:text-(--border-trace-stroke) group-hover:stroke-[3.25]",
  "motion-reduce:group-hover:text-white motion-reduce:group-hover:stroke-[2.25]",
);

const iconSlotClasses = cn(
  "inline-flex shrink-0",
  "[&_svg]:text-white [&_svg]:stroke-[2.25]",
  "[&_svg]:transition-[color,stroke-width] [&_svg]:duration-1000 [&_svg]:ease-in-out",
  "group-hover:[&_svg]:text-(--border-trace-stroke) group-hover:[&_svg]:stroke-[3.25]",
  "motion-reduce:[&_svg]:transition-none motion-reduce:group-hover:[&_svg]:text-white motion-reduce:group-hover:[&_svg]:stroke-[2.25]",
);

const variantClasses: Record<PrimaryCtaLinkVariant, string> = {
  default:
    "bg-[#0A0A0F] font-medium text-white shadow-sm hover:bg-[#0A0A0F]/90 hover:shadow-md",
  accent:
    "bg-brand-accent font-semibold text-white shadow-sm hover:bg-brand-accent/85 hover:shadow-md",
  outline:
    "border-[#0A0A0F] bg-[#0A0A0F] font-medium text-white hover:bg-[#0A0A0F]/90",
};

export function PrimaryCtaLink({
  href,
  children,
  className,
  wrapperClassName,
  size = "lg",
  variant = "default",
  showArrow = true,
  leadingIcon,
  trailingIcon,
  onNavigate,
}: PrimaryCtaLinkProps) {
  return (
    <span
      className={cn(
        "group relative inline-flex overflow-visible",
        slowTransition,
        "hover:scale-105 active:scale-[0.98] motion-reduce:hover:scale-100",
        wrapperClassName,
      )}
    >
      <Link
        href={href}
        onClick={onNavigate}
        className={cn(
          "relative z-1 inline-flex items-center justify-center rounded-full",
          "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent",
          "whitespace-nowrap",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
      >
        <BorderTrace durationSec={2.5} />
        {leadingIcon ? (
          <span className={iconSlotClasses}>{leadingIcon}</span>
        ) : null}
        {children}
        {trailingIcon ? (
          <span className={iconSlotClasses}>{trailingIcon}</span>
        ) : null}
        {showArrow ? (
          <LuArrowUpRight
            className={cn(arrowSizeClasses[size], iconHoverClasses)}
            aria-hidden
          />
        ) : null}
      </Link>
    </span>
  );
}
