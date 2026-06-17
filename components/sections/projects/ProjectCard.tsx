import type { IconType } from "react-icons";
import { LuArrowRight } from "react-icons/lu";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/shadcn";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  imageUrl?: string;
  icon?: IconType;
  coverGradient?: string;
  tag?: string;
  featured?: boolean;
  viewLabel?: string;
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
  featured = false,
  viewLabel = "View",
  className,
}: ProjectCardProps) {
  const cover = (
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        featured
          ? "aspect-2/1 md:aspect-auto md:min-h-full md:w-[45%]"
          : "aspect-5/3",
        !imageUrl && cn("bg-linear-to-br", coverGradient),
      )}
    >
      {!imageUrl ? (
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      ) : null}
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
        />
      ) : Icon ? (
        <div className="flex h-full min-h-36 items-center justify-center">
          <Icon
            className={cn(
              "text-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:text-white/30",
              featured ? "size-20 md:size-28" : "size-14",
            )}
            strokeWidth={1.25}
            aria-hidden
          />
        </div>
      ) : null}
      {tag ? (
        <Badge className="absolute left-4 top-4 border-0 bg-black/25 px-2.5 py-1 text-[0.6875rem] font-medium text-white backdrop-blur-md">
          {tag}
        </Badge>
      ) : null}
    </div>
  );

  const body = (
    <div
      className={cn(
        "flex flex-col",
        featured ? "justify-center p-6 md:w-[55%] md:p-8" : "p-5",
      )}
    >
      <h3
        className={cn(
          "font-(family-name:--font-heading) font-bold leading-tight tracking-tight transition-colors group-hover:text-brand-accent",
          featured ? "text-xl md:text-2xl" : "text-lg",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-2 text-foreground/60",
          featured ? "text-base leading-relaxed" : "text-sm leading-relaxed",
        )}
      >
        {description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
        {viewLabel}
        <LuArrowRight className="size-3.5" />
      </span>
    </div>
  );

  return (
    <Link
      href={href}
      className={cn(
        "group overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[0_2px_8px_rgb(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-[0_16px_40px_rgb(58,107,82,0.12)]",
        featured ? "flex flex-col md:flex-row" : "flex flex-col",
        className,
      )}
    >
      {cover}
      {body}
    </Link>
  );
}
