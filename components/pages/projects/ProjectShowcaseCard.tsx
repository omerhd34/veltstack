import type { IconType } from "react-icons";
import { LuArrowRight } from "react-icons/lu";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface ProjectShowcaseCardProps {
  index: number;
  title: string;
  description: string;
  href: string;
  tag: string;
  icon: IconType;
  imageUrl?: string;
  coverGradient: string;
  viewLabel: string;
  featuredLabel?: string;
  featured?: boolean;
  className?: string;
}

export function ProjectShowcaseCard({
  index,
  title,
  description,
  href,
  tag,
  icon: Icon,
  imageUrl,
  coverGradient,
  viewLabel,
  featuredLabel,
  featured = false,
  className,
}: ProjectShowcaseCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex overflow-hidden rounded-3xl border border-border/70 bg-white shadow-[0_2px_12px_rgb(0_0_0/0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-accent/35 hover:shadow-[0_24px_56px_rgb(58_107_82/0.14)]",
        featured ? "flex-col lg:flex-row" : "flex-col",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-muted",
          featured
            ? "aspect-16/10 lg:aspect-auto lg:min-h-full lg:w-[52%]"
            : "aspect-16/10",
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
            <div className="flex h-full min-h-48 items-center justify-center">
              <Icon
                className={cn(
                  "text-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:text-white/35",
                  featured ? "size-24 lg:size-32" : "size-16",
                )}
                strokeWidth={1.25}
                aria-hidden
              />
            </div>
          </>
        ) : (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
        )}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
          {tag}
        </span>

        {featured && featuredLabel ? (
          <span className="absolute right-4 top-4 rounded-full bg-brand-accent px-3 py-1 text-[0.6875rem] font-semibold text-white">
            {featuredLabel}
          </span>
        ) : null}

        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute font-(family-name:--font-heading) font-bold leading-none text-white/10 transition-colors duration-500 group-hover:text-white/15",
            featured
              ? "bottom-4 right-6 text-8xl lg:text-9xl"
              : "bottom-3 right-4 text-6xl",
          )}
        >
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <div
        className={cn(
          "flex flex-col justify-center",
          featured ? "p-6 lg:w-[48%] lg:p-10" : "p-5 sm:p-6",
        )}
      >
        <h3
          className={cn(
            "font-(family-name:--font-heading) font-bold leading-tight tracking-tight transition-colors group-hover:text-brand-accent",
            featured ? "text-2xl lg:text-3xl" : "text-xl",
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "mt-3 text-foreground/60",
            featured ? "text-base leading-relaxed" : "text-sm leading-relaxed",
          )}
        >
          {description}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent">
          {viewLabel}
          <LuArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
