import { Link } from "@/i18n/navigation"
import { BlogPreviewImage } from "./BlogPreviewImage"

interface BlogPreviewCardProps {
  title: string
  excerpt: string
  href: string
  image: string
  readingTimeLabel?: string
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
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-[#6C63FF]/50 hover:shadow-lg"
    >
      <BlogPreviewImage src={image} alt={title} />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-(family-name:--font-heading) text-lg font-semibold group-hover:text-[#6C63FF]">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {excerpt}
        </p>
        {readingTimeLabel && (
          <p className="mt-4 text-xs font-medium text-[#6C63FF]">{readingTimeLabel}</p>
        )}
      </div>
    </Link>
  )
}
