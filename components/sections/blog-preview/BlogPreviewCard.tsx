import { Link } from "@/i18n/navigation";
import { BlogPreviewImage } from "./BlogPreviewImage";

interface BlogPreviewCardProps {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  readingTimeLabel?: string;
  featured?: boolean;
}

export function BlogPreviewCard({
  title,
  excerpt,
  href,
  image,
  readingTimeLabel,
  featured = false,
}: BlogPreviewCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_2px_12px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-accent/40 hover:shadow-[0_16px_48px_rgb(58,107,82,0.1)]"
    >
      <div className={featured ? "aspect-video" : "aspect-16/10"}>
        <BlogPreviewImage src={image} alt={title} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        {readingTimeLabel && (
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent">
            {readingTimeLabel}
          </span>
        )}
        <h3 className="font-(family-name:--font-heading) text-lg font-bold leading-snug text-[#0A0A0F] transition-colors group-hover:text-brand-accent">
          {title}
        </h3>
        <p className="mt-2.5 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {excerpt}
        </p>
        <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-brand-accent opacity-0 transition-opacity group-hover:opacity-100">
          <span>Devamını oku</span>
          <svg className="size-3" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6h8M6 2l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
