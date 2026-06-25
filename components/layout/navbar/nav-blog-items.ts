export const navBlogDescKeyBySlug = {
  "geleneksel-yazilim-yapay-zeka": "blogGelenekselYazilimDesc",
  "ozel-yazilim-cms": "blogOzelYazilimCmsDesc",
  "domain-hosting": "blogDomainHostingDesc",
  seo: "blogSeoDesc",
  "vercel-de-yayin": "blogVercelDeYayinDesc",
  "dogru-domain-secimi": "blogDogruDomainSecimiDesc",
} as const;

export type NavBlogDescKey =
  (typeof navBlogDescKeyBySlug)[keyof typeof navBlogDescKeyBySlug];

export function getNavBlogDescKey(
  slug: string,
): NavBlogDescKey | undefined {
  return navBlogDescKeyBySlug[slug as keyof typeof navBlogDescKeyBySlug];
}
