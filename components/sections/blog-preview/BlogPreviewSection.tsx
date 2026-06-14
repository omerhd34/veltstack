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
    <section className={`bg-[#F8F9FA] py-24 md:py-32 ${className ?? ""}`}>
      <SiteContainer>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Blog
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

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <BlogPreviewCard
              key={post.href}
              title={post.title}
              excerpt={post.excerpt}
              href={post.href}
              image={post.image}
              readingTimeLabel={t("readingTime", { minutes: post.readingTime })}
              featured={index === 0}
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
