import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import { LuArrowLeft, LuCalendar, LuClock } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { BreadcrumbSchema } from "@/components/seo";
import { ServicesPageCTA } from "@/components/pages/services/ServicesPageCTA";
import { BlogCard } from "@/components/pages/blog/BlogCard";
import { blogPosts, formatDate } from "@/components/pages/blog/blog-data";
import { SITE_URL } from "@/lib/constants";
import { getPathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

interface BlogDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const title = locale === "tr" ? post.titleTr : post.titleEn;
  const desc = locale === "tr" ? post.excerptTr : post.excerptEn;
  const canonical = `${SITE_URL}${getPathname({
    locale: locale as Locale,
    href: `/blog/${slug}`,
  })}`;

  return {
    title: title + " | Veltstack",
    description: desc,
    alternates: { canonical },
    openGraph: {
      title,
      description: desc,
      type: "article",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      images: post.imageUrl ? [{ url: `${SITE_URL}${post.imageUrl}` }] : [],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const t = await getTranslations("blogPage");
  const loc = locale as "tr" | "en";

  const title = loc === "tr" ? post.titleTr : post.titleEn;
  const excerpt = loc === "tr" ? post.excerptTr : post.excerptEn;
  const category = loc === "tr" ? post.category : post.categoryEn;
  const date = formatDate(post.publishedAt, loc);
  const readingTime = t("readingTime", { minutes: post.readingTime });

  const blogUrl = `${SITE_URL}${getPathname({ locale: loc, href: "/blog" })}`;
  const postUrl = `${SITE_URL}${getPathname({ locale: loc, href: `/blog/${slug}` })}`;

  // Related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.slug !== slug &&
        (loc === "tr" ? p.category : p.categoryEn) === category,
    )
    .slice(0, 3);

  // Placeholder article content
  const articleContent =
    loc === "tr"
      ? `
<p>Bu yazıda, konuyu tüm yönleriyle ele alıyor; pratik örnekler, gerçek proje deneyimlerimiz ve ölçülebilir sonuçlarla birlikte aktarıyoruz.</p>

<h2>Neden Bu Konuyu Seçtik?</h2>
<p>Müşteri projelerinde sıklıkla karşılaştığımız bu sorun, çoğu zaman küçük bir yapılandırma değişikliğiyle çözülebilir hale geliyor. Biz de bu içeriği hazırlarken benzer durumla karşılaşan herkesin faydalanabileceği bir kılavuz oluşturmayı hedefledik.</p>

<h2>Teknik Detaylar</h2>
<p>Modern web geliştirme pratiklerini takip eden bir ekip olarak, her konuya hem teorik hem de pratik bir bakış açısıyla yaklaşıyoruz. Araçlarımızı, kütüphanelerimizi ve süreçlerimizi sürekli güncelliyoruz.</p>

<h2>Gerçek Proje Deneyimleri</h2>
<p>IQfinansAI, Yazıcı Ticaret ve Fablessi gibi projelerimizde öğrendiklerimizi bu yazıda paylaşıyoruz. Her proje bize yeni bir bakış açısı kazandırdı.</p>

<h2>Sonuç</h2>
<p>Dijital dünyada başarılı olmak için teknik mükemmellik kadar doğru strateji de gereklidir. Veltstack olarak her projede bu dengeyi korumaya çalışıyoruz.</p>
      `
      : `
<p>In this post, we cover the topic from all angles, sharing practical examples, real project experience and measurable results.</p>

<h2>Why Did We Choose This Topic?</h2>
<p>This is a challenge we frequently encounter in client projects — one that's often solvable with a small configuration change. We set out to create a guide that anyone facing a similar situation can benefit from.</p>

<h2>Technical Details</h2>
<p>As a team that follows modern web development practices, we approach every topic from both a theoretical and practical perspective, keeping our tools, libraries and processes continuously updated.</p>

<h2>Real Project Experience</h2>
<p>We share lessons learned from projects like IQfinansAI, Yazıcı Ticaret and Fablessi. Each project gave us a fresh perspective.</p>

<h2>Conclusion</h2>
<p>Succeeding in the digital world requires the right strategy as well as technical excellence. At Veltstack, we strive to maintain that balance in every project.</p>
      `;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: loc === "tr" ? "Ana Sayfa" : "Home", url: SITE_URL },
          { name: "Blog", url: blogUrl },
          { name: title, url: postUrl },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050f0c] pb-0 pt-16 text-white md:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgb(58_107_82/0.14),transparent)]"
        />
        <SiteContainer className="relative">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-emerald-400/70 transition-colors hover:text-emerald-300"
          >
            <LuArrowLeft className="size-4" />
            Blog
          </Link>

          {/* Category + meta */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-emerald-300/60">
            <span className="rounded-full border border-emerald-600/30 bg-emerald-900/40 px-3 py-1 text-xs font-semibold text-emerald-300">
              {category}
            </span>
            <span className="flex items-center gap-1.5">
              <LuCalendar className="size-3.5" aria-hidden />
              {date}
            </span>
            <span
              aria-hidden
              className="size-1 rounded-full bg-emerald-700/40"
            />
            <span className="flex items-center gap-1.5">
              <LuClock className="size-3.5" aria-hidden />
              {readingTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-6 max-w-3xl font-(family-name:--font-heading) text-[1.875rem] font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>

          {/* Excerpt */}
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-emerald-50/65 lg:text-lg">
            {excerpt}
          </p>

          {/* Author */}
          <div className="mt-8 flex items-center gap-3 border-t border-emerald-900/40 pt-6 pb-12">
            <div className="flex size-10 items-center justify-center rounded-full bg-brand-accent/20 text-sm font-bold text-brand-accent">
              V
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Veltstack</p>
              <p className="text-xs text-emerald-400/60">
                {loc === "tr" ? "Full Stack Developer" : "Full Stack Developer"}
              </p>
            </div>
          </div>
        </SiteContainer>
      </section>

      {/* Cover image */}
      <div className="relative h-[300px] w-full overflow-hidden bg-[#F4F8F5] md:h-[420px]">
        <Image
          src={post.imageUrl}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/20 to-transparent"
        />
      </div>

      {/* Article body */}
      <SiteContainer className="py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <article
            className="prose prose-neutral max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-10 prose-h2:text-2xl prose-p:leading-[1.9] prose-p:text-foreground/72"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: static placeholder content
            dangerouslySetInnerHTML={{ __html: articleContent }}
          />

          {/* Share */}
          <div className="mt-14 border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              {loc === "tr"
                ? "Bu içeriği faydalı buldunuz mu? Çevrenizle paylaşın."
                : "Did you find this useful? Share it with your network."}
            </p>
          </div>
        </div>
      </SiteContainer>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#F8F9FA] py-16 md:py-20">
          <SiteContainer>
            <div className="flex items-center gap-4">
              <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                {loc === "tr" ? "İlgili Yazılar" : "Related Posts"}
              </span>
              <div className="h-px flex-1 bg-border/60" />
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard
                  key={related.slug}
                  post={related}
                  locale={loc}
                  readMoreLabel={t("readMore")}
                  readingTimeLabel={t("readingTime", {
                    minutes: related.readingTime,
                  })}
                />
              ))}
            </div>
          </SiteContainer>
        </section>
      )}

      <ServicesPageCTA
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
        buttonLabel={t("ctaButton")}
        note={t("ctaNote")}
      />
    </>
  );
}
