import { getTranslations, getLocale } from "next-intl/server";
import { ServicesPageCTA } from "@/components/pages/services/ServicesPageCTA";
import { blogPosts } from "./blog-data";
import { BlogPageHero } from "./BlogPageHero";
import { BlogGrid } from "./BlogGrid";

interface BlogPageViewProps {
  className?: string;
}

export async function BlogPageView({ className }: BlogPageViewProps) {
  const t = await getTranslations("blogPage");
  const locale = (await getLocale()) as "tr" | "en";

  const posts = blogPosts.map((post) => ({
    ...post,
    readingTimeLabel: t("readingTime", { minutes: post.readingTime }),
  }));

  const labels = {
    searchPlaceholder: t("searchPlaceholder"),
    clearSearch: t("clearSearch"),
    allCategories: t("allCategories"),
    readMore: t("readMore"),
    noResults: t("noResults"),
    noResultsSub: t("noResultsSub"),
    categories: t.raw("categories") as string[],
  };

  return (
    <div className={className}>
      <BlogPageHero
        badge={t("heroBadge")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        imageAlt={t("heroImageAlt")}
        postCountLabel={t("postCountLabel", { count: blogPosts.length })}
      />

      <BlogGrid posts={posts} locale={locale} labels={labels} />

      <ServicesPageCTA
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
        buttonLabel={t("ctaButton")}
        note={t("ctaNote")}
      />
    </div>
  );
}
