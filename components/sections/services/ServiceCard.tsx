"use client";

import type { IconType } from "react-icons";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/shadcn";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { CardIndexNumber } from "@/components/ui/CardIndexNumber";
import { TechStackIcons } from "@/components/sections/projects/TechStackIcons";
import { cn, isExternalHref } from "@/lib/utils";
import {
  serviceItems,
  type ServiceSlug,
} from "@/components/sections/services/service-items";

const serviceIconBySlug = Object.fromEntries(
  serviceItems.map((item) => [item.slug, item.icon]),
) as Record<ServiceSlug, IconType>;

interface ServiceCardProps {
  title: string;
  description?: string;
  tag?: string;
  techStack?: string[];
  href: string;
  slug?: ServiceSlug;
  icon?: IconType;
  compact?: boolean;
  numbered?: boolean;
  index?: number;
  variant?: "default" | "slide";
  isActive?: boolean;
  onActivate?: () => void;
  activateLabel?: string;
  onNavigate?: () => void;
}

export function ServiceCard({
  title,
  description,
  tag,
  techStack,
  href,
  slug,
  icon,
  compact = false,
  numbered = false,
  index,
  variant = "default",
  isActive = true,
  onNavigate,
}: ServiceCardProps) {
  const Icon = icon ?? (slug ? serviceIconBySlug[slug] : LuArrowUpRight);
  const isSlide = variant === "slide";
  const slowTransition =
    "transition-all duration-1000 ease-in-out motion-reduce:transition-none";

  const cardClassName = cn(
    "group relative flex h-full flex-col rounded-2xl bg-card",
    slowTransition,
    isSlide
      ? cn(
          "border-trace-hover-fallback box-border border-[3px] border-solid border-[#8aab99] bg-white p-6 shadow-[0_2px_8px_rgb(0,0,0,0.04),0_12px_32px_rgb(58,107,82,0.07)] hover:shadow-[0_16px_48px_rgb(58,107,82,0.14)]",
          isActive && "cursor-pointer",
          !isActive &&
            "border-[#9db8a8] bg-[#f8faf9] shadow-[0_2px_6px_rgb(0,0,0,0.03),0_8px_20px_rgb(58,107,82,0.05)] hover:border-[#8aab99] hover:bg-white hover:shadow-[0_16px_48px_rgb(58,107,82,0.14)]",
        )
      : cn(
          "border-trace-hover-fallback box-border border-[3px] border-solid border-border hover:shadow-lg",
          compact ? "p-4" : "p-6",
        ),
  );

  const content = (
    <>
      <BorderTrace
        durationSec={2.5}
        {...(isSlide
          ? {
              radius: 16,
              loop: true,
              trigger: "hover" as const,
              stroke: "var(--brand-accent)",
            }
          : {})}
      />
      {numbered && index != null ? (
        <CardIndexNumber
          index={index}
          theme="light"
          reveal={isSlide ? "always" : "hover"}
        />
      ) : null}
      <div
        className={cn(
          "flex flex-1",
          compact ? "gap-3" : "gap-4",
          compact && !description && "items-center",
        )}
      >
        <div
          className={cn(
            "flex shrink-0 items-center justify-center",
            compact
              ? "size-9 rounded-xl bg-brand-accent text-brand-accent-foreground"
              : isSlide
                ? cn(
                    "size-12 rounded-2xl bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/20 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-accent-foreground group-hover:ring-brand-accent/50",
                    !isActive && "opacity-80 group-hover:opacity-100",
                    slowTransition,
                  )
                : cn(
                    "size-11 rounded-xl bg-brand-accent text-brand-accent-foreground group-hover:scale-105",
                    slowTransition,
                  ),
          )}
        >
          <Icon
            className={cn(
              compact ? "size-4" : isSlide ? "size-6" : "size-5",
              !compact && slowTransition,
            )}
            strokeWidth={1.75}
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <h3
            className={cn(
              "font-(family-name:--font-heading) font-bold leading-snug tracking-tight",
              compact
                ? "text-base"
                : isSlide
                  ? cn(
                      "pr-10 text-xl text-[#0A0A0F]",
                      !isActive && "group-hover:text-[#050508]",
                    )
                  : "text-lg",
            )}
          >
            {title}
          </h3>
          {description ? (
            <p
              className={cn(
                "leading-relaxed",
                compact
                  ? "mt-1.5 line-clamp-3 h-[calc(0.75rem*1.625*3)] text-xs leading-relaxed text-muted-foreground"
                  : isSlide
                    ? cn(
                        "mt-2 mb-3 line-clamp-4 h-[calc(0.9375rem*1.7*4)] text-[0.9375rem] leading-[1.7]",
                        isActive
                          ? "text-foreground/60"
                          : "text-foreground/45 group-hover:text-foreground/58",
                      )
                    : "mt-1.5 text-sm text-muted-foreground",
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
      </div>
      {techStack?.length ? (
        <TechStackIcons
          names={techStack}
          size={compact ? "sm" : "md"}
          className={compact ? "mt-3" : "mt-5"}
        />
      ) : tag ? (
        <div
          className={cn(
            "flex items-center justify-between gap-3 border-t-2 border-solid border-t-[#8aab99] group-hover:border-brand-accent",
            isSlide && !isActive && "border-t-[#9db8a8]/80",
            slowTransition,
            compact ? "mt-3 pt-3" : isSlide ? "mt-auto pt-4" : "mt-5 pt-0",
          )}
        >
          <Badge
            variant="secondary"
            className={cn(
              "rounded-full border-0 px-3 py-1 text-xs font-medium",
              isSlide
                ? cn(
                    "bg-brand-accent/10 text-brand-accent",
                    !isActive &&
                      "bg-brand-accent/8 text-brand-accent/85 group-hover:bg-brand-accent/10 group-hover:text-brand-accent",
                  )
                : "bg-muted font-normal text-muted-foreground",
            )}
          >
            {tag}
          </Badge>
          {isSlide ? (
            <span
              aria-hidden
              className={cn(
                "flex size-8 items-center justify-center rounded-full bg-brand-accent/0 text-brand-accent group-hover:bg-brand-accent/10",
                slowTransition,
              )}
            >
              <LuArrowUpRight
                className={cn(
                  "size-4 translate-x-0 stroke-[1.75] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:stroke-[2.75]",
                  slowTransition,
                )}
              />
            </span>
          ) : null}
        </div>
      ) : null}
    </>
  );

  if (isSlide && !isActive) {
    return (
      <div aria-hidden className={cn(cardClassName, "w-full")}>
        {content}
      </div>
    );
  }

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        onClick={onNavigate}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(cardClassName, isSlide && "block w-full")}
    >
      {content}
    </Link>
  );
}
