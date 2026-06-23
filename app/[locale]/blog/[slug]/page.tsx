import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { BreadcrumbSchema } from "@/components/seo";
import { ServicesPageCTA } from "@/components/pages/services/ServicesPageCTA";
import { BlogCard } from "@/components/pages/blog/BlogCard";
import { BlogArticleBody } from "@/components/pages/blog-detail/BlogArticleBody";
import { BlogDetailHero } from "@/components/pages/blog-detail/BlogDetailHero";
import { blogPosts, formatDate } from "@/components/pages/blog/blog-data";
import { getBlogArticleContent } from "@/components/pages/blog/blog-articles";
import { toLatinUppercase } from "@/lib/utils";
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
  const canonical = `https://www.veltstack.com${getPathname({
    locale: locale as Locale,
    href: `/blog/${slug}`,
  })}`;

  return {
    title,
    description: desc,
    alternates: { canonical },
    openGraph: {
      title,
      description: desc,
      type: "article",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      images: post.imageUrl
        ? [{ url: `https://www.veltstack.com${post.imageUrl}` }]
        : [],
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

  const blogUrl = `https://www.veltstack.com${getPathname({ locale: loc, href: "/blog" })}`;
  const postUrl = `https://www.veltstack.com${getPathname({ locale: loc, href: `/blog/${slug}` })}`;

  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.slug !== slug &&
        (loc === "tr" ? p.category : p.categoryEn) === category,
    )
    .slice(0, 3);

  const customContent = getBlogArticleContent(slug, loc);

  const placeholderContent =
    loc === "tr"
      ? `
<p>Bu yazıda, konuyu tüm yönleriyle ele alıyor; praktik örnekler, gerçek proje deneyimlerimiz ve ölçülebilir sonuçlarla birlikte aktarıyoruz.</p>

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
<p>This is a challenge we frequently encounter in client projects, one that's often solvable with a small configuration change. We set out to create a guide that anyone facing a similar situation can benefit from.</p>

<h2>Technical Details</h2>
<p>As a team that follows modern web development practices, we approach every topic from both a theoretical and practical perspective, keeping our tools, libraries and processes continuously updated.</p>

<h2>Real Project Experience</h2>
<p>We share lessons learned from projects like IQfinansAI, Yazıcı Ticaret and Fablessi. Each project gave us a fresh perspective.</p>

<h2>Conclusion</h2>
<p>Succeeding in the digital world requires the right strategy as well as technical excellence. At Veltstack, we strive to maintain that balance in every project.</p>
      `;

  const articleContent = customContent ?? placeholderContent;

  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: loc === "tr" ? "Ana Sayfa" : "Home",
            url: "https://www.veltstack.com",
          },
          { name: "Blog", url: blogUrl },
          { name: title, url: postUrl },
        ]}
      />

      <BlogDetailHero
        category={category}
        date={date}
        readingTime={readingTime}
        title={title}
        excerpt={excerpt}
        imageUrl={post.imageUrl}
        imageAlt={title}
        writtenByLabel={t("writtenByLabel")}
      />

      <SiteContainer className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <BlogArticleBody html={articleContent} locale={loc} />

          <div className="mt-14 border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              {loc === "tr"
                ? "Bu içeriği faydalı buldunuz mu? Çevrenizle paylaşın."
                : "Did you find this useful? Share it with your network."}
            </p>
          </div>
        </div>
      </SiteContainer>

      {relatedPosts.length > 0 && (
        <section className="bg-[#F8F9FA] py-16 md:py-20">
          <SiteContainer>
            <div className="flex items-center gap-4">
              <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-brand-accent">
                {toLatinUppercase(
                  loc === "tr" ? "İlgili Yazılar" : "Related Posts",
                )}
              </span>
              <div className="h-px flex-1 bg-border/60" />
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard
                  key={related.slug}
                  post={related}
                  locale={loc}
                  layout="vertical"
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
