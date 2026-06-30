"use client";

import { useTranslations } from "next-intl";
import {
  ScrollCarousel,
  type FeatureItem,
} from "@/components/lightswind/scroll-carousel";
import { BlogPreviewCard } from "./BlogPreviewCard";

export interface BlogPreviewScrollItem {
  slug: string;
  href: string;
  title: string;
  excerpt: string;
  image: string;
  readingTimeLabel: string;
}

interface BlogPreviewScrollCarouselProps {
  posts: BlogPreviewScrollItem[];
  className?: string;
}

export function BlogPreviewScrollCarousel({
  posts,
  className,
}: BlogPreviewScrollCarouselProps) {
  const t = useTranslations("home");

  const postBySlug = Object.fromEntries(
    posts.map((post) => [post.slug, post]),
  );

  const features: FeatureItem[] = posts.map((post) => ({
    id: post.slug,
    title: post.title,
    description: post.excerpt,
    image: post.image,
    href: post.href,
  }));

  return (
    <ScrollCarousel
      className={className}
      features={features}
      hideSecondRow
      interactionMode="drag"
      alignStart
      columnsPerView={2}
      loop
      navLabels={{
        prev: t("blogSliderPrev"),
        next: t("blogSliderNext"),
      }}
      containerClassName="pt-0 pb-4 md:pb-6"
      navPlacement="outside"
      progressStyle="pages"
      renderFeature={(feature) => {
        const post = postBySlug[feature.id as string];
        if (!post) return null;

        return (
          <BlogPreviewCard
            title={post.title}
            excerpt={post.excerpt}
            href={post.href}
            image={post.image}
            readingTimeLabel={post.readingTimeLabel}
          />
        );
      }}
    />
  );
}
