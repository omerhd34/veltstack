import { getLocale, getTranslations } from "next-intl/server";
import { LuWorkflow } from "react-icons/lu";
import { TbShieldCheckFilled } from "react-icons/tb";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionDecorIcon } from "@/components/ui/SectionDecorIcon";
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
    <section
      className={`relative overflow-hidden bg-[#061812] py-24 text-white md:py-32 ${className ?? ""}`}
      aria-labelledby="blog-preview-section-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgb(58_107_82/0.2),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/30 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 size-80 rounded-full bg-brand-accent/8 blur-3xl"
      />
      <SectionDecorIcon
        icon={LuWorkflow}
        tone="on-dark-muted"
        className="left-4 top-20 -rotate-6 xl:left-10"
      />
      <SectionDecorIcon
        icon={TbShieldCheckFilled}
        tone="on-dark"
        size="md"
        className="right-2 top-[24%] rotate-12 xl:right-10"
      />
      <SiteContainer className="relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-emerald-300/90">
              {toLatinUppercase("Blog")}
            </span>
            <h2
              id="blog-preview-section-title"
              className="mt-6 font-(family-name:--font-heading) text-4xl font-bold tracking-tight text-white md:text-5xl"
            >
              {t("blogTitle")}
            </h2>
            <p className="mt-4 text-lg text-white/55">
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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-400/20 to-transparent"
      />
    </section>
  );
}
