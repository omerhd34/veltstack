import { LuArrowRight } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { cn, toLatinUppercase } from "@/lib/utils";
import { BlogPreviewImage } from "./BlogPreviewImage";

const slowTransition =
  "transition-all duration-1000 ease-in-out motion-reduce:transition-none";

interface BlogPreviewCardProps {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  readingTimeLabel?: string;
}

export function BlogPreviewCard({
  title,
  excerpt,
  href,
  image,
  readingTimeLabel,
}: BlogPreviewCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-full flex-col rounded-2xl bg-white",
        "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent",
        "shadow-[0_2px_12px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgb(58,107,82,0.1)]",
        slowTransition,
      )}
    >
      <BorderTrace durationSec={2.5} />
      <div className="aspect-16/10 shrink-0 overflow-hidden rounded-t-[calc(1rem-3px)]">
        <BlogPreviewImage src={image} alt={title} />
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-6">
        <span className="mb-3 block h-4 shrink-0 text-xs font-semibold leading-4 tracking-[0.15em] text-brand-accent">
          {readingTimeLabel ? toLatinUppercase(readingTimeLabel) : "\u00A0"}
        </span>
        <h3 className="line-clamp-2 min-h-[calc(1.125rem*1.375*2)] shrink-0 font-(family-name:--font-heading) text-lg font-bold leading-snug text-[#0A0A0F] transition-colors group-hover:text-brand-accent">
          {title}
        </h3>
        <p className="mt-2.5 line-clamp-2 min-h-[calc(0.875rem*1.625*2)] shrink-0 text-sm leading-relaxed text-muted-foreground">
          {excerpt}
        </p>
        <div
          className={cn(
            "mt-auto flex shrink-0 origin-left items-center gap-1.5 pt-5 text-xs font-semibold text-brand-accent",
            "transition-[color,transform] duration-300 ease-out",
            "hover:scale-105 hover:text-[#a8dfc4]",
            "motion-reduce:hover:scale-100",
          )}
        >
          <span>Devamını oku</span>
          <LuArrowRight className="size-3 shrink-0" aria-hidden />
        </div>
      </div>
    </Link>
  );
}
