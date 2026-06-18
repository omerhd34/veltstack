// components/pages/blog/BlogCard.tsx
import Image from "next/image";
import { LuArrowRight, LuCalendar, LuClock } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { BlogPost } from "./blog-data";
import { formatDate } from "./blog-data";

interface BlogCardProps {
  post: BlogPost;
  locale: "tr" | "en";
  readMoreLabel: string;
  readingTimeLabel: string;
  featuredBadge?: string;
  featured?: boolean;
  className?: string;
}

export function BlogCard({
  post,
  locale,
  readMoreLabel,
  readingTimeLabel,
  featuredBadge,
  featured = false,
  className,
}: BlogCardProps) {
  const title = locale === "tr" ? post.titleTr : post.titleEn;
  const excerpt = locale === "tr" ? post.excerptTr : post.excerptEn;
  const category = locale === "tr" ? post.category : post.categoryEn;
  const date = formatDate(post.publishedAt, locale);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group relative flex overflow-hidden rounded-3xl border border-border/70 bg-white shadow-[0_2px_12px_rgb(0_0_0/0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-accent/35 hover:shadow-[0_24px_56px_rgb(58_107_82/0.14)]",
        featured ? "flex-col lg:flex-row" : "flex-col",
        className,
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative overflow-hidden bg-[#F4F8F5]",
          featured
            ? "aspect-16/10 lg:aspect-auto lg:min-h-full lg:w-[48%]"
            : "aspect-16/10",
        )}
      >
        <Image
          src={post.imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Category badge */}
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
          {category}
        </span>

        {/* Featured badge */}
        {featured && featuredBadge && (
          <span className="absolute right-4 top-4 rounded-full bg-brand-accent px-3 py-1 text-[0.6875rem] font-semibold text-white">
            {featuredBadge}
          </span>
        )}
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex flex-col",
          featured ? "justify-center p-7 lg:w-[52%] lg:p-10" : "p-6",
        )}
      >
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <LuCalendar className="size-3.5 text-brand-accent/70" aria-hidden />
            {date}
          </span>
          <span aria-hidden className="size-1 rounded-full bg-border" />
          <span className="flex items-center gap-1.5">
            <LuClock className="size-3.5 text-brand-accent/70" aria-hidden />
            {readingTimeLabel}
          </span>
        </div>

        {/* Title */}
        <h2
          className={cn(
            "mt-3 font-(family-name:--font-heading) font-bold leading-tight tracking-tight transition-colors group-hover:text-brand-accent",
            featured ? "text-xl lg:text-2xl" : "text-lg",
          )}
        >
          {title}
        </h2>

        {/* Excerpt */}
        <p
          className={cn(
            "mt-3 leading-relaxed text-foreground/60",
            featured ? "line-clamp-3 text-base" : "line-clamp-2 text-sm",
          )}
        >
          {excerpt}
        </p>

        {/* Read more */}
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent">
          {readMoreLabel}
          <LuArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
