import type { IconType } from "react-icons";
import { LuArrowUpRight } from "react-icons/lu";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/shadcn";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { cn, isExternalHref } from "@/lib/utils";

const slowTransition =
  "transition-all duration-1000 ease-in-out motion-reduce:transition-none";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  imageUrl?: string;
  icon?: IconType;
  coverGradient?: string;
  tag?: string;
  index?: number;
  viewLabel?: string;
  featured?: boolean;
  variant?: "default" | "grid";
  className?: string;
}

export function ProjectCard({
  title,
  description,
  href,
  imageUrl,
  icon: Icon,
  coverGradient = "from-brand-accent/80 to-brand-accent",
  tag,
  index,
  viewLabel = "View",
  featured = false,
  variant = "default",
  className,
}: ProjectCardProps) {
  const isGrid = variant === "grid";

  const cover = (
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        isGrid
          ? "aspect-3/2 rounded-t-2xl"
          : featured
            ? "aspect-16/10 rounded-t-3xl md:aspect-auto md:min-h-full md:w-[48%] md:rounded-tl-3xl md:rounded-tr-none md:rounded-bl-3xl"
            : "aspect-16/10 rounded-t-3xl",
        !imageUrl && cn("bg-linear-to-br", coverGradient),
      )}
    >
      {!imageUrl ? (
        <>
          <div
            aria-hidden
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          {Icon ? (
            <div
              className={cn(
                "flex h-full items-center justify-center",
                isGrid ? "min-h-28" : "min-h-40",
              )}
            >
              <Icon
                className={cn(
                  "text-white/20 group-hover:scale-110 group-hover:text-white/35",
                  slowTransition,
                  isGrid
                    ? "size-12"
                    : featured
                      ? "size-20 md:size-24 lg:size-28"
                      : "size-16",
                )}
                strokeWidth={1.25}
                aria-hidden
              />
            </div>
          ) : null}
        </>
      ) : (
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={cn("object-cover group-hover:scale-105", slowTransition)}
          sizes={
            isGrid
              ? "(max-width: 768px) 100vw, 33vw"
              : featured
                ? "(max-width: 768px) 100vw, 60vw"
                : "(max-width: 768px) 100vw, 33vw"
          }
        />
      )}

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-black/5 to-transparent transition-opacity duration-500 motion-reduce:transition-none",
          isGrid ? "opacity-50 group-hover:opacity-70" : "opacity-60 group-hover:opacity-80",
        )}
      />

      {index != null ? (
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute font-(family-name:--font-heading) font-bold leading-none text-white/10 transition-colors duration-500 group-hover:text-white/20 motion-reduce:transition-none",
            isGrid
              ? "bottom-2.5 right-3 text-4xl"
              : featured
                ? "bottom-4 right-5 text-7xl md:text-8xl"
                : "bottom-3 right-4 text-5xl",
          )}
        >
          {String(index).padStart(2, "0")}
        </span>
      ) : null}

      {tag ? (
        <Badge
          variant="secondary"
          className={cn(
            "absolute left-3 top-3 rounded-full border-0 bg-white/90 font-semibold text-[#0A0A0F] shadow-sm backdrop-blur-sm",
            isGrid
              ? "px-2.5 py-0.5 text-[0.625rem]"
              : "px-3 py-1 text-[0.6875rem]",
          )}
        >
          {tag}
        </Badge>
      ) : null}

      {isGrid ? (
        <span
          aria-hidden
          className={cn(
            "absolute right-3 top-3 flex size-7 items-center justify-center rounded-full bg-white/90 text-brand-accent opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 motion-reduce:transition-none",
          )}
        >
          <LuArrowUpRight className="size-3.5 stroke-2" />
        </span>
      ) : null}
    </div>
  );

  const body = (
    <div
      className={cn(
        "flex flex-1 flex-col",
        isGrid
          ? "p-4"
          : featured
            ? "justify-center p-6 md:w-[52%] md:p-8"
            : "p-5 sm:p-6",
      )}
    >
      <h3
        className={cn(
          "font-(family-name:--font-heading) font-bold leading-snug tracking-tight transition-colors group-hover:text-brand-accent",
          slowTransition,
          isGrid ? "text-base" : featured ? "text-xl md:text-2xl" : "text-lg",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-1.5 text-foreground/60",
          isGrid
            ? "line-clamp-2 text-sm leading-relaxed"
            : cn(
                "mt-2 line-clamp-3",
                featured ? "text-base leading-relaxed" : "text-sm leading-relaxed",
              ),
        )}
      >
        {description}
      </p>

      {!isGrid ? (
        <div
          className={cn(
            "mt-auto flex items-center justify-between gap-3 border-t border-border/60 pt-4",
            slowTransition,
            "group-hover:border-brand-accent/30",
            featured ? "mt-5" : "mt-4",
          )}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none">
            {viewLabel}
          </span>
          <span
            aria-hidden
            className={cn(
              "flex size-8 items-center justify-center rounded-full bg-brand-accent/0 text-brand-accent group-hover:bg-brand-accent/10",
              slowTransition,
            )}
          >
            <LuArrowUpRight
              className={cn(
                "size-4 stroke-[1.75] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:stroke-[2.5]",
                slowTransition,
              )}
            />
          </span>
        </div>
      ) : null}
    </div>
  );

  const cardClassName = cn(
    "group relative flex flex-col overflow-hidden",
    isGrid ? "rounded-2xl" : "rounded-3xl",
    "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent bg-white",
    isGrid
      ? "shadow-[0_2px_8px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgb(58,107,82,0.12)]"
      : "shadow-[0_2px_8px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_48px_rgb(58,107,82,0.14)]",
    slowTransition,
    featured ? "flex-col md:flex-row" : "",
    className,
  );

  const cardContent = (
    <>
      <BorderTrace durationSec={2.5} />
      {cover}
      {body}
    </>
  );

  return isExternalHref(href) ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClassName}
    >
      {cardContent}
    </a>
  ) : (
    <Link href={href} className={cardClassName}>
      {cardContent}
    </Link>
  );
}
