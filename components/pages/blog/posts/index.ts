import type { BlogPost, BlogPostEntry } from "./types";
import { blogPostEntry as gelenekselYazilimYapayZeka } from "./geleneksel-yazilim-yapay-zeka";
import { blogPostEntry as ozelYazilimCms } from "./ozel-yazilim-cms";
import { blogPostEntry as domainHosting } from "./domain-hosting";
import { blogPostEntry as seo } from "./seo";
import { blogPostEntry as vercelDeYayin } from "./vercel-de-yayin";
import { blogPostEntry as dogruDomainSecimi } from "./dogru-domain-secimi";
import { blogPostEntry as domainHostingTasima } from "./domain-hosting-tasima";
import { blogPostEntry as enIyiSanalPosFirmalari } from "./en-iyi-sanal-pos-firmalari";
import { blogPostEntry as veritabaniSecimi } from "./veritabani-secimi";
import { blogPostEntry as responsiveTasarim } from "./responsive-tasarim";
import { blogPostEntry as enIyiFreelancerSiteleri } from "./en-iyi-freelancer-siteleri";
import { blogPostEntry as reactNextjs } from "./react-nextjs";

/** Sıra: blog listesi, navbar ve footer görünümünü belirler. */
export const blogPostEntries: BlogPostEntry[] = [
  gelenekselYazilimYapayZeka,
  ozelYazilimCms,
  domainHosting,
  seo,
  vercelDeYayin,
  dogruDomainSecimi,
  domainHostingTasima,
  enIyiSanalPosFirmalari,
  veritabaniSecimi,
  responsiveTasarim,
  enIyiFreelancerSiteleri,
  reactNextjs,
];

export const blogPosts: BlogPost[] = blogPostEntries.map(({ content, ...meta }) => meta);

export function getBlogArticleContent(
  slug: string,
  locale: "tr" | "en",
): string | null {
  const entry = blogPostEntries.find((post) => post.slug === slug);
  if (!entry?.content) return null;

  const content = locale === "tr" ? entry.content.tr : entry.content.en;
  const prefix = locale === "tr" ? "" : "/en";
  return content.replace(/href="\/blog\//g, `href="${prefix}/blog/`);
}
