"use client";

import { BlogDomainExtensionsTable } from "./BlogDomainExtensionsTable";
import { BlogFreelancerPlatformsTable } from "./BlogFreelancerPlatformsTable";
import { BLOG_DOMAIN_EXTENSIONS_PLACEHOLDER } from "./domain-extensions-data";
import { BLOG_FREELANCER_PLATFORMS_PLACEHOLDER } from "./freelancer-platforms-data";

interface BlogArticleBodyInnerProps {
  html: string;
  locale: "tr" | "en";
}

function HtmlChunk({ html }: { html: string }) {
  if (!html.trim()) return null;

  return (
    <div
      // biome-ignore lint/security/noDangerouslySetInnerHtml: static blog article HTML
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function BlogArticleBodyInner({
  html,
  locale,
}: BlogArticleBodyInnerProps) {
  if (
    !html.includes(BLOG_DOMAIN_EXTENSIONS_PLACEHOLDER) &&
    !html.includes(BLOG_FREELANCER_PLATFORMS_PLACEHOLDER)
  ) {
    return <HtmlChunk html={html} />;
  }

  const segments = html
    .split(
      new RegExp(
        `(${BLOG_DOMAIN_EXTENSIONS_PLACEHOLDER}|${BLOG_FREELANCER_PLATFORMS_PLACEHOLDER})`,
      ),
    )
    .filter(Boolean);

  return (
    <>
      {segments.map((segment, index) => {
        if (segment === BLOG_DOMAIN_EXTENSIONS_PLACEHOLDER) {
          return (
            <BlogDomainExtensionsTable
              key={`domain-extensions-${index}`}
              locale={locale}
            />
          );
        }

        if (segment === BLOG_FREELANCER_PLATFORMS_PLACEHOLDER) {
          return (
            <BlogFreelancerPlatformsTable
              key={`freelancer-platforms-${index}`}
              locale={locale}
            />
          );
        }

        return <HtmlChunk key={`html-chunk-${index}`} html={segment} />;
      })}
    </>
  );
}
