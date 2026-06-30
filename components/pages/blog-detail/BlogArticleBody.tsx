import { cn } from "@/lib/utils";
import { BlogArticleBodyInner } from "./BlogArticleBodyInner";

interface BlogArticleBodyProps {
  html: string;
  locale: "tr" | "en";
  className?: string;
}

export function BlogArticleBody({
  html,
  locale,
  className,
}: BlogArticleBodyProps) {
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
        "[&_.blog-steps]:list-none [&_.blog-steps]:pl-0 [&_.blog-steps_li]:p-0 [&_.blog-checklist]:list-none [&_.blog-checklist]:pl-0 [&_.blog-checklist_li]:p-0 [&_.blog-compare-card_ul]:list-disc [&_.blog-compare-card_li]:before:content-none",
        "[&_.blog-type-card_p]:my-0 [&_.blog-type-card_h4]:mt-0 [&_.blog-section-lead]:mt-0 [&_.blog-analogy_p]:my-0 [&_.blog-analogy_svg]:block",
        "[&_.blog-table-wrap]:prose-table:my-0 [&_.blog-table-wrap]:p-0! [&_.blog-table-wrap_table]:my-0 [&_.blog-table-wrap_thead]:m-0!",
        "[&_.blog-table-expandable_.blog-table-wrap]:my-0",
        className,
      )}
    >
      <BlogArticleBodyInner html={html} locale={locale} />
    </article>
  );
}
