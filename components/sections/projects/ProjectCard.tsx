import type { IconType } from "react-icons";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
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
  featured?: boolean;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  href,
  imageUrl,
  icon: Icon,
  coverGradient = "from-brand-accent/80 to-brand-accent",
  featured = false,
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
    </div>
  );

  const cardClassName = cn(
    "group relative flex flex-col rounded-none",
    "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent bg-white",
    "shadow-[0_2px_8px_rgb(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgb(58,107,82,0.12)]",
    slowTransition,
    featured ? "flex-col md:flex-row" : "",
    className,
  );

  const cardContent = (
    <>
      <BorderTrace durationSec={2.5} radius={0} />
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
