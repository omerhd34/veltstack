export type { BlogPost } from "./posts/types";
export { blogPosts } from "./posts";

import type { BlogPost } from "./posts/types";
import { blogPosts } from "./posts";

const NAV_BLOG_COUNT = 6;
const FOOTER_BLOG_COUNT = 6;

export function getAllCategories(locale: "tr" | "en"): string[] {
  const key = locale === "tr" ? "category" : "categoryEn";
  const unique = Array.from(new Set(blogPosts.map((p) => p[key])));
  return unique;
}

export function getPostsByCategory(
  category: string,
  locale: "tr" | "en",
): BlogPost[] {
  const key = locale === "tr" ? "category" : "categoryEn";
  return blogPosts.filter((p) => p[key] === category);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}

function getBlogPostsBySlugs(slugs: readonly string[], locale: "tr" | "en") {
  return slugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is NonNullable<typeof post> => post !== undefined)
    .map((post) => ({
      slug: post.slug,
      title: locale === "tr" ? post.titleTr : post.titleEn,
      excerpt: locale === "tr" ? post.excerptTr : post.excerptEn,
      category: locale === "tr" ? post.category : post.categoryEn,
    }));
}

export function getFooterBlogPosts(locale: "tr" | "en") {
  const slugs = blogPosts.slice(0, FOOTER_BLOG_COUNT).map((post) => post.slug);
  return getBlogPostsBySlugs(slugs, locale).map(
    ({ slug, title, category }) => ({
      slug,
      title,
      category,
    }),
  );
}

export function getNavBlogPosts(locale: "tr" | "en") {
  const slugs = blogPosts.slice(0, NAV_BLOG_COUNT).map((post) => post.slug);
  return getBlogPostsBySlugs(slugs, locale);
}

export function formatDate(dateString: string, locale: "tr" | "en"): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
