import { getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { BlogPreviewCard } from "./BlogPreviewCard";
import { BlogPreviewMoreButton } from "./BlogPreviewMoreButton";

interface BlogPreviewSectionProps {
  className?: string;
}

export async function BlogPreviewSection({
  className,
}: BlogPreviewSectionProps) {
  const t = await getTranslations("home");

  const posts = [
    {
      title: t("blogPost1Title"),
      excerpt: t("blogPost1Excerpt"),
      href: "/blog/nextjs-seo",
      image: "/images/blog/blog-1.svg",
      readingTime: 5,
    },
    {
      title: t("blogPost2Title"),
      excerpt: t("blogPost2Excerpt"),
      href: "/blog/e-ticaret-ipuclari",
      image: "/images/blog/blog-2.svg",
      readingTime: 7,
    },
    {
      title: t("blogPost3Title"),
      excerpt: t("blogPost3Excerpt"),
      href: "/blog/mobil-vs-pwa",
      image: "/images/blog/blog-3.svg",
      readingTime: 4,
    },
  ];

  return (
    <section className={`py-24 ${className ?? ""}`}>
      <SiteContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-(family-name:--font-heading) text-3xl font-bold md:text-4xl">
            {t("blogTitle")}
          </h2>
          <p className="mt-3 text-muted-foreground">{t("blogSubtitle")}</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="flex justify-center">
          <BlogPreviewMoreButton label={t("blogMoreButton")} />
        </div>
      </SiteContainer>
    </section>
  );
}
