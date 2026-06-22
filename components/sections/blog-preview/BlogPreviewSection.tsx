import { getLocale, getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { blogPosts } from "@/components/pages/blog/blog-data";
import { toLatinUppercase } from "@/lib/utils";
import { BlogPreviewCard } from "./BlogPreviewCard";
import { BlogPreviewMoreButton } from "./BlogPreviewMoreButton";

interface BlogPreviewSectionProps {
  className?: string;
}

export async function BlogPreviewSection({
  className,
}: BlogPreviewSectionProps) {
  const t = await getTranslations("home");
  const locale = (await getLocale()) as "tr" | "en";

  const posts = [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 6)
    .map((post) => ({
      title: locale === "tr" ? post.titleTr : post.titleEn,
      excerpt: locale === "tr" ? post.excerptTr : post.excerptEn,
      href: `/blog/${post.slug}`,
      image: post.imageUrl,
      readingTime: post.readingTime,
      featured: post.featured ?? false,
    }));

  return (
    <section className={`bg-[#F8F9FA] py-24 md:py-32 ${className ?? ""}`}>
      <SiteContainer>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-brand-accent">
              {toLatinUppercase("Blog")}
            </span>
            <h2 className="mt-6 font-(family-name:--font-heading) text-4xl font-bold tracking-tight text-[#0A0A0F] md:text-5xl">
              {t("blogTitle")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("blogSubtitle")}
            </p>
          </div>
          <div className="hidden md:block">
            <BlogPreviewMoreButton label={t("blogMoreButton")} />
          </div>
        </div>

        <div className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <BlogPreviewCard
              key={post.href}
              title={post.title}
              excerpt={post.excerpt}
              href={post.href}
              image={post.image}
              readingTimeLabel={t("readingTime", { minutes: post.readingTime })}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <BlogPreviewMoreButton label={t("blogMoreButton")} />
        </div>
      </SiteContainer>
    </section>
  );
}
