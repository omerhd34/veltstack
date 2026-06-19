export interface BlogPost {
  slug: string;
  titleTr: string;
  titleEn: string;
  excerptTr: string;
  excerptEn: string;
  category: string;
  categoryEn: string;
  imageUrl: string;
  readingTime: number;
  publishedAt: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "domain-nasil-alinir",
    titleTr: "Domain Nasıl Alınır?",
    titleEn: "How to Buy a Domain?",
    excerptTr:
      "Alan adı satın alma sürecini adım adım anlatıyor; domain seçimi, DNS yapılandırması ve dikkat edilmesi gerekenleri paylaşıyoruz.",
    excerptEn:
      "A step-by-step guide to buying a domain — choosing a name, DNS setup and what to watch out for.",
    category: "Hosting & Domain",
    categoryEn: "Hosting & Domain",
    imageUrl: "/images/blog/blog-1.svg",
    readingTime: 5,
    publishedAt: "2026-06-15",
    featured: true,
  },
  {
    slug: "domain-ve-hosting-nedir",
    titleTr: "Domain ve Hosting Nedir?",
    titleEn: "What Are Domain and Hosting?",
    excerptTr:
      "Domain ve hosting kavramlarını sade bir dille açıklıyor; ikisinin farkını ve birlikte nasıl çalıştığını anlatıyoruz.",
    excerptEn:
      "We explain domain and hosting in plain language — how they differ and work together.",
    category: "Hosting & Domain",
    categoryEn: "Hosting & Domain",
    imageUrl: "/images/blog/blog-2.svg",
    readingTime: 5,
    publishedAt: "2026-06-10",
  },
  {
    slug: "seo-nedir-nasil-yapilir",
    titleTr: "SEO Nedir ve Nasıl Yapılır?",
    titleEn: "What Is SEO and How to Do It?",
    excerptTr:
      "Arama motoru optimizasyonunun temellerini, türlerini ve uygulanabilir adımlarını kapsamlı bir rehberle paylaşıyoruz.",
    excerptEn:
      "A comprehensive guide to search engine optimization basics, types and actionable steps.",
    category: "SEO",
    categoryEn: "SEO",
    imageUrl: "/images/blog/blog-3.svg",
    readingTime: 8,
    publishedAt: "2026-06-05",
    featured: true,
  },
  {
    slug: "en-iyi-hosting-firmalari",
    titleTr: "En İyi Hosting Firmaları",
    titleEn: "Best Hosting Providers",
    excerptTr:
      "Türkiye ve global pazarda öne çıkan hosting firmalarını değerlendiriyor; domain tescili dahil en iyi tercih olarak ixirhost'u öneriyoruz.",
    excerptEn:
      "We review leading hosting providers in Turkey and globally and recommend ixirhost for domain registration and hosting.",
    category: "Hosting & Domain",
    categoryEn: "Hosting & Domain",
    imageUrl: "/images/blog/blog-1.svg",
    readingTime: 7,
    publishedAt: "2026-05-28",
  },
  {
    slug: "en-iyi-freelancer-siteleri",
    titleTr: "En İyi Freelancer Siteleri",
    titleEn: "Best Freelancer Platforms",
    excerptTr:
      "Global ve Türkiye'deki en popüler freelance platformlarını karşılaştırıyor; doğru platformu seçmenize yardımcı oluyoruz.",
    excerptEn:
      "We compare the most popular freelance platforms globally and in Turkey to help you choose the right one.",
    category: "Araçlar & İpuçları",
    categoryEn: "Tools & Tips",
    imageUrl: "/images/blog/blog-2.svg",
    readingTime: 6,
    publishedAt: "2026-05-20",
  },
  {
    slug: "nextjs-seo-rehberi",
    titleTr: "Next.js ile SEO Optimizasyonu: Kapsamlı Rehber",
    titleEn: "SEO Optimization with Next.js: A Comprehensive Guide",
    excerptTr:
      "Server-side rendering, metadata API, Open Graph ve yapılandırılmış veri ile arama motorlarında üst sıralara çıkmanın en iyi pratiklerini inceliyoruz.",
    excerptEn:
      "We explore best practices for ranking higher in search engines with server-side rendering, the Metadata API, Open Graph and structured data.",
    category: "Web Geliştirme",
    categoryEn: "Web Development",
    imageUrl: "/images/blog/blog-1.svg",
    readingTime: 8,
    publishedAt: "2025-05-12",
    featured: true,
  },
  {
    slug: "eticaret-sitesi-kurma-ipuclari",
    titleTr: "E-Ticaret Sitesi Kurarken Dikkat Edilmesi Gereken 7 Şey",
    titleEn: "7 Things to Consider When Building an E-Commerce Site",
    excerptTr:
      "Ödeme entegrasyonundan ürün sayfası optimizasyonuna, sepet deneyiminden mobil uyumluluğa kadar başarılı bir e-ticaret altyapısının temel taşları.",
    excerptEn:
      "From payment integration to product page optimization, cart experience to mobile responsiveness — the building blocks of a successful e-commerce infrastructure.",
    category: "E-Ticaret",
    categoryEn: "E-Commerce",
    imageUrl: "/images/blog/blog-2.svg",
    readingTime: 6,
    publishedAt: "2025-04-28",
    featured: true,
  },
  {
    slug: "mobil-uygulama-mi-pwa-mi",
    titleTr: "Mobil Uygulama mı, PWA mı? İşletmeniz İçin Doğru Seçim",
    titleEn: "Mobile App or PWA? The Right Choice for Your Business",
    excerptTr:
      "Native mobil uygulama ile Progressive Web App arasındaki farkları, maliyet, performans ve kullanıcı deneyimi açısından karşılaştırıyoruz.",
    excerptEn:
      "We compare native mobile apps and Progressive Web Apps on cost, performance and user experience to help you make the right decision.",
    category: "Mobil",
    categoryEn: "Mobile",
    imageUrl: "/images/blog/blog-3.svg",
    readingTime: 5,
    publishedAt: "2025-04-10",
  },
  {
    slug: "react-native-vs-flutter",
    titleTr: "React Native mi, Flutter mi? 2025 Karşılaştırması",
    titleEn: "React Native vs Flutter: 2025 Comparison",
    excerptTr:
      "İki popüler cross-platform framework'ü performans, ekosistem, öğrenme eğrisi ve gerçek proje deneyimlerimiz ışığında değerlendiriyoruz.",
    excerptEn:
      "We evaluate two popular cross-platform frameworks on performance, ecosystem, learning curve and our real-project experience.",
    category: "Mobil",
    categoryEn: "Mobile",
    imageUrl: "/images/blog/blog-1.svg",
    readingTime: 7,
    publishedAt: "2025-03-22",
  },
  {
    slug: "teknik-seo-audit-nasil-yapilir",
    titleTr: "Teknik SEO Denetimi Nasıl Yapılır? Adım Adım Kılavuz",
    titleEn: "How to Run a Technical SEO Audit? A Step-by-Step Guide",
    excerptTr:
      "Core Web Vitals, tarama hataları, indeksleme sorunları ve yapılandırılmış veri kontrolü ile sitenizin teknik SEO sağlığını nasıl ölçeceğinizi anlatıyoruz.",
    excerptEn:
      "We show you how to measure your site's technical SEO health with Core Web Vitals, crawl errors, indexing issues and structured data checks.",
    category: "SEO",
    categoryEn: "SEO",
    imageUrl: "/images/blog/blog-2.svg",
    readingTime: 10,
    publishedAt: "2025-03-05",
  },
  {
    slug: "tailwind-css-ipuclari",
    titleTr: "Tailwind CSS ile Daha Hızlı UI Geliştirme: 10 Pratik İpucu",
    titleEn: "Faster UI Development with Tailwind CSS: 10 Practical Tips",
    excerptTr:
      "Utility-first yaklaşımı en verimli şekilde kullanmak için component soyutlama, design token'ları ve özel plugin stratejilerini paylaşıyoruz.",
    excerptEn:
      "We share component abstraction, design tokens and custom plugin strategies for getting the most out of the utility-first approach.",
    category: "Araçlar & İpuçları",
    categoryEn: "Tools & Tips",
    imageUrl: "/images/blog/blog-3.svg",
    readingTime: 5,
    publishedAt: "2025-02-18",
  },
  {
    slug: "prisma-orm-kullanim-rehberi",
    titleTr: "Prisma ORM ile Tip Güvenli Veritabanı Yönetimi",
    titleEn: "Type-Safe Database Management with Prisma ORM",
    excerptTr:
      "Schema tasarımından migration yönetimine, ilişkisel sorgulardan performans optimizasyonuna kadar Prisma'nın güçlü yanlarını ele alıyoruz.",
    excerptEn:
      "We cover Prisma's strengths from schema design to migration management, relational queries to performance optimization.",
    category: "Web Geliştirme",
    categoryEn: "Web Development",
    imageUrl: "/images/blog/blog-1.svg",
    readingTime: 9,
    publishedAt: "2025-02-03",
  },
  {
    slug: "core-web-vitals-2025",
    titleTr: "Core Web Vitals 2025: Sitenizi Nasıl Optimize Edersiniz?",
    titleEn: "Core Web Vitals 2025: How to Optimize Your Site?",
    excerptTr:
      "LCP, INP ve CLS metriklerini iyileştirmenin somut yollarını, araçlarını ve gerçek proje örneklerini paylaşıyoruz.",
    excerptEn:
      "We share concrete ways to improve LCP, INP and CLS metrics, along with tools and real project examples.",
    category: "SEO",
    categoryEn: "SEO",
    imageUrl: "/images/blog/blog-2.svg",
    readingTime: 7,
    publishedAt: "2025-01-20",
  },
];

const footerBlogSlugs = [
  "domain-nasil-alinir",
  "en-iyi-hosting-firmalari",
  "domain-ve-hosting-nedir",
  "seo-nedir-nasil-yapilir",
  "en-iyi-freelancer-siteleri",
] as const;

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

export function getFooterBlogPosts(locale: "tr" | "en") {
  return footerBlogSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is BlogPost => post !== undefined)
    .map((post) => ({
      slug: post.slug,
      title: locale === "tr" ? post.titleTr : post.titleEn,
      category: locale === "tr" ? post.category : post.categoryEn,
    }));
}

export function formatDate(dateString: string, locale: "tr" | "en"): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
