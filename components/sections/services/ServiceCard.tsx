import type { IconType } from "react-icons";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/shadcn";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { CardIndexNumber } from "@/components/ui/CardIndexNumber";
import { TechStackIcons } from "@/components/sections/projects/TechStackIcons";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  tag?: string;
  techStack?: string[];
  href: string;
  icon: IconType;
  compact?: boolean;
  numbered?: boolean;
  index?: number;
  variant?: "default" | "slide";
  onNavigate?: () => void;
}

export function ServiceCard({
  title,
  description,
  tag,
  techStack,
  href,
  icon: Icon,
  compact = false,
  numbered = false,
  index,
  variant = "default",
  onNavigate,
}: ServiceCardProps) {
  const isSlide = variant === "slide";
  const slowTransition =
    "transition-all duration-1000 ease-in-out motion-reduce:transition-none";

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "group relative flex flex-col rounded-2xl bg-card",
        slowTransition,
        !isSlide && "h-full",
        isSlide
          ? "border-trace-hover-fallback box-border border-2 border-solid border-[#8aab99] bg-white p-6 shadow-[0_2px_8px_rgb(0,0,0,0.04),0_12px_32px_rgb(58,107,82,0.07)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgb(58,107,82,0.14)]"
          : cn(
              "overflow-hidden border border-solid border-border hover:-translate-y-0.5 hover:border-brand-accent hover:shadow-lg",
              compact ? "p-4" : "p-6",
            ),
      )}
    >
      {isSlide ? <BorderTrace /> : null}
      {numbered && index != null ? (
        <CardIndexNumber
          index={index}
          theme="light"
          reveal={isSlide ? "always" : "hover"}
        />
      ) : null}
      <div className={cn("flex", compact ? "gap-3" : "gap-4")}>
        <div
          className={cn(
            "flex shrink-0 items-center justify-center",
            compact
              ? "size-9 rounded-xl bg-brand-accent text-brand-accent-foreground"
              : isSlide
                ? cn(
                    "size-12 rounded-2xl bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/20 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-accent-foreground group-hover:ring-brand-accent/50",
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
                  ? "pr-10 text-xl text-[#0A0A0F]"
                  : "text-lg",
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "leading-relaxed",
              compact
                ? "mt-1.5 text-xs text-muted-foreground"
                : isSlide
                  ? "mt-2 text-[0.9375rem] leading-[1.7] text-foreground/60"
                  : "mt-1.5 text-sm text-muted-foreground",
            )}
          >
            {description}
          </p>
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
            slowTransition,
            compact ? "mt-3 pt-3" : isSlide ? "mt-4 pt-4" : "mt-5 pt-0",
          )}
        >
          <Badge
            variant="secondary"
            className={cn(
              "rounded-full border-0 px-3 py-1 text-xs font-medium",
              isSlide
                ? "bg-brand-accent/10 text-brand-accent"
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
              <LuArrowRight
                className={cn(
                  "size-4 translate-x-0 stroke-[1.75] group-hover:translate-x-0.5 group-hover:stroke-[2.75]",
                  slowTransition,
                )}
              />
            </span>
          ) : null}
        </div>
      ) : null}
    </Link>
  );
}
