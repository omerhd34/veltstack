import { cn } from "@/lib/utils";

interface BlogArticleBodyProps {
  html: string;
  className?: string;
}

export function BlogArticleBody({ html, className }: BlogArticleBodyProps) {
  return (
    <article
      className={cn(
        "blog-prose prose prose-neutral max-w-none",
        "prose-headings:font-(family-name:--font-heading) prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground",
        "prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border/60 prose-h2:pb-3 prose-h2:text-2xl",
        "prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl",
        "prose-p:leading-[1.85] prose-p:text-foreground/75",
        "prose-a:font-medium prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline",
        "prose-li:text-foreground/75 prose-li:marker:text-brand-accent",
        "prose-ul:my-6 prose-ol:my-6",
        "prose-strong:font-semibold prose-strong:text-foreground",
        "prose-em:text-foreground/80",
        "prose-blockquote:not-italic prose-blockquote:border-l-brand-accent prose-blockquote:bg-muted/40 prose-blockquote:py-1",
        "prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        className,
      )}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: static blog article HTML
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
