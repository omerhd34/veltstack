# Proje Kuralları

## Rol ve Davranış (AI Persona)
- **Sen Kıdemli bir Full Stack Developer'sın.** Modern web teknolojilerinde (Next.js, React, Tailwind CSS, Node.js) uzmansın.
- Kodları yazarken her zaman en iyi pratikleri (best practices) uygular, temiz ve ölçeklenebilir bir mimari kurarsın.
- Yaratıcı, çözüm odaklı ve proaktif bir yaklaşım sergilersin.
- YORUM SATIRLARI YAZMA.

## Proje Sabitleri (Global Değişkenler)
- **Kurumsal Şirket Adı:** `asbdefgh`
- **Hosting / Domain Adı:** `asbdefgh`
- **Website link :**  `www.asbdefgh.com`
- **Kural:** Logo bileşenleri (text bazlı logolar), dummy textler (yer tutucu metinler), meta etiketleri ve UI içindeki marka bildirimlerinde her zaman bu değişkenleri kullan. 
- **Önemli:** Bu şirket ve domain adı geçicidir. İlerleyen süreçte ben bu dosyadan `asbdefgh` değerini başka bir isimle değiştirdiğimde, o andan itibaren tüm yeni komponent ve metin üretimlerinde güncellediğim yeni ismi kullanmalısın.

---

## Geliştirme Kuralları

- **Her zaman component bazlı çalış.** Tek dosyaya birden fazla component yazma.
- **Her componentin kendi dosyası olacak.** `HeroSection.tsx`, `HeroVideo.tsx`, `HeroCTA.tsx` gibi.
- **Componentler içinde alt klasörler kullanılacak.** `components/sections/hero/`, `components/layout/navbar/` gibi.
- **Her klasörde `index.ts` barrel export dosyası olacak.**
- **PascalCase isimlendirme:** `ServiceCard.tsx`, `ProjectFilter.tsx`
- **Her componentin üstünde `Props` interface tanımla.**
- **`use client` sadece gerçekten gerektiğinde yaz.** Varsayılan olarak Server Component kullan.
- **Yeni bir component yazmadan önce ilgili klasörü oluştur.**

### Component Yazım Şablonu

```tsx
// components/sections/hero/HeroSection.tsx

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaPrimary: string
  ctaSecondary: string
}

export function HeroSection({ title, subtitle, ctaPrimary, ctaSecondary }: HeroSectionProps) {
  return (
    <section>
      <HeroVideo />
      <HeroContent title={title} subtitle={subtitle} />
      <HeroCTA primary={ctaPrimary} secondary={ctaSecondary} />
    </section>
  )
}
```

### Index Barrel Export Şablonu

```ts
// components/sections/hero/index.ts
export { HeroSection } from './HeroSection'
export { HeroVideo } from './HeroVideo'
export { HeroContent } from './HeroContent'
export { HeroCTA } from './HeroCTA'

// Kullanım:
import { HeroSection } from '@/components/sections/hero'
```

---

## Proje Tanımı

| | |
|---|---|
| **Hedef** | Kurumsal web sitesi, e-ticaret, mobil uygulama ve SEO hizmetleri sunan bir Full Stack Developer'ın ajans kalitesinde hizmet sitesi |
| **Hedef Kitle** | KOBİ'ler, girişimciler, kurumsal firmalar |
| **Birincil Amaç** | Lead generation + SEO ile organik trafik |
| **Dil Desteği** | Türkçe (`tr`) + İngilizce (`en`) |

---

## 1. Tech Stack

| Katman | Teknoloji |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Dil | TypeScript |
| Stil | Tailwind CSS |
| UI Bileşenleri | shadcn/ui + Aceternity UI |
| İkonlar | react-icons |
| i18n | next-intl |
| State | Zustand |
| HTTP | Axios (`lib/axios.ts`) |
| Backend | Next.js Route Handlers |
| Veritabanı | MySQL via Railway |
| ORM | Prisma |
| Animasyon | framer-motion |
| SEO | JSON-LD, dinamik sitemap |
| Deployment | Vercel |

---

## 2. Veritabanı Şeması (`prisma/schema.prisma`)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String
  role      Role     @default(ADMIN)
  createdAt DateTime @default(now())
}

enum Role {
  ADMIN
  EDITOR
}

model Service {
  id             String    @id @default(cuid())
  slug           String    @unique
  title_tr       String
  title_en       String
  description_tr String
  description_en String
  content_tr     String    @db.LongText
  content_en     String    @db.LongText
  iconName       String
  displayOrder   Int
  deliveryTime   String?
  features       Json
  faqItems       Json
  metaTitle_tr   String?
  metaTitle_en   String?
  metaDesc_tr    String?
  metaDesc_en    String?
  projects       Project[]
}

model Technology {
  id       String       @id @default(cuid())
  name     String
  iconName String
  category TechCategory
  projects Project[]
}

enum TechCategory {
  FRONTEND
  BACKEND
  MOBILE
  DATABASE
  DEVOPS
}

model Project {
  id             String          @id @default(cuid())
  slug           String          @unique
  title_tr       String
  title_en       String
  description_tr String
  description_en String
  content_tr     String          @db.LongText
  content_en     String          @db.LongText
  imageUrl       String
  images         Json
  liveUrl        String?
  githubUrl      String?
  isFeatured     Boolean         @default(false)
  category       ProjectCategory
  clientName     String?
  duration       String?
  result         String?
  technologies   Technology[]
  service        Service?        @relation(fields: [serviceId], references: [id])
  serviceId      String?
  createdAt      DateTime        @default(now())
}

enum ProjectCategory {
  CORPORATE
  ECOMMERCE
  MOBILE
  PORTFOLIO
  SEO
  OTHER
}

model Post {
  id           String   @id @default(cuid())
  slug         String   @unique
  title_tr     String
  title_en     String
  excerpt_tr   String
  excerpt_en   String
  content_tr   String   @db.LongText
  content_en   String   @db.LongText
  imageUrl     String?
  category     String
  tags         Json
  isPublished  Boolean  @default(false)
  metaTitle_tr String?
  metaTitle_en String?
  metaDesc_tr  String?
  metaDesc_en  String?
  readingTime  Int?
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

model Testimonial {
  id          String          @id @default(cuid())
  clientName  String
  companyName String
  logoUrl     String?
  feedback_tr String
  feedback_en String
  rating      Int
  category    ProjectCategory
  isApproved  Boolean         @default(false)
  createdAt   DateTime        @default(now())
}

model Message {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String?
  subject   String
  service   String?
  budget    String?
  content   String   @db.Text
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())
}

model SiteConfig {
  id    String @id @default(cuid())
  key   String @unique
  value String @db.Text
}
```

---

## 3. Sayfa Mimarisi

### Kullanıcı Sayfaları (`app/[locale]/`)

| URL | Açıklama |
|---|---|
| `/` | Ana Sayfa |
| `/hizmetler` | Hizmetler listesi |
| `/hizmetler/[slug]` | Hizmet landing page (SEO odaklı) |
| `/projeler` | Portfolio grid |
| `/projeler/[slug]` | Proje detay |
| `/blog` | Blog listesi |
| `/blog/[slug]` | Blog yazısı |
| `/hakkimda` | Hakkımda sayfası |
| `/iletisim` | İletişim formu |

### Admin Sayfaları (`app/admin/`)

| URL | Açıklama |
|---|---|
| `/admin/login` | Giriş sayfası |
| `/admin` | Dashboard |
| `/admin/projeler` | Proje listesi + CRUD |
| `/admin/blog` | Blog listesi + CRUD |
| `/admin/mesajlar` | İletişim mesajları |
| `/admin/ayarlar` | Site ayarları |

### SEO Dosyaları (`app/`)

- `sitemap.ts` — Dinamik, tüm URL'leri kapsar
- `robots.ts` — Admin ve API rotaları engellenir
- `manifest.ts` — PWA desteği
- `opengraph-image.tsx` — Dinamik OG görseli

---

## 4. Sayfa İçerikleri

### Ana Sayfa Section Sırası

1. **Hero** — Maskeli video arka plan + başlık + CTA butonları
2. **Hizmetler Özeti** — 5 kartlı Bento Grid
3. **Neden Ben?** — Tek muhatap, Hızlı teslimat, Teknik destek, Şeffaflık
4. **Süreç** — Keşif → Tasarım → Geliştirme → Yayın (Aceternity Timeline)
5. **Öne Çıkan Projeler** — `isFeatured: true` olanlar (3D Card Effect)
6. **Referans Logoları** — Müşteri logoları slider
7. **Müşteri Yorumları** — Infinite Moving Cards
8. **Blog Öne Çıkanlar** — Son 3 yazı
9. **CTA Banner** — İletişime geç (Background Beams)

### Hero Bölümü — Video (Önemli)

Ana sayfanın açılış bölümünde **maskeli video** yer alacak:

- **İçerik:** ~30 saniyelik ekip çalışma videosu — VS Code açık monitörler, kod yazan eller, Figma, loş ofis atmosferi, mor-mavi ekran yansımaları
- **Şekil:** Puzzle/organik maske — köşeleri girintili-çıkıntılı SVG `clip-path`
- **Teknik:** `autoPlay muted loop playsInline`, MP4 + WebM format, max 8MB
- **Fallback:** Video yüklenemezse gradient arka plan
- **Video kaynağı:** `public/videos/hero.mp4` ve `public/videos/hero.webm`
- **Poster:** `public/videos/hero-poster.jpg`

```tsx
// components/sections/hero/HeroVideo.tsx
export function HeroVideo() {
  return (
    <div
      className="relative w-[520px] h-[480px] overflow-hidden"
      style={{ clipPath: `path('M 60 0 C 120 0, 180 20, 200 80 ...')` }}
    >
      <video autoPlay muted loop playsInline poster="/videos/hero-poster.jpg"
        className="w-full h-full object-cover">
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30" />
    </div>
  )
}
```

### Hizmet Landing Page'leri (5 Adet — Her Biri Ayrı SEO Hedefi)

Her sayfa şu bölümleri içerir: Hero → Neler Sunuyorum → Süreç → Teknolojiler → Projeler → SSS → Müşteri Yorumları → CTA formu

| Slug | TR Keyword | EN Keyword |
|---|---|---|
| `kurumsal-web-sitesi` | kurumsal web sitesi yapımı | corporate website development |
| `e-ticaret` | e-ticaret sitesi kurma | ecommerce website development |
| `mobil-uygulama` | mobil uygulama geliştirme | mobile app development |
| `seo-hizmetleri` | SEO hizmeti | SEO services |
| `portfolyo-sitesi` | portfolyo sitesi yapımı | portfolio website development |

### Diğer Sayfalar

**Portfolio:** Kategori filtresi (Tümü/Kurumsal/E-Ticaret/Mobil/SEO) + Card Hover Effect + hover'da canlı site ve GitHub linkleri

**Proje Detay:** Hero görseli → Müşteri/Süre/Sonuç metrikleri → İçerik (markdown) → Tech stack badge'leri → Görsel galerisi → Benzer projeler

**Blog:** Kategori + tag filtresi, okuma süresi, Tracing Beam okuma deneyimi, Breadcrumb

**İletişim:** Form (Ad, Email, Telefon, Hizmet seçimi, Bütçe, Mesaj) + sol panel (iletişim bilgileri, sosyal medya, çalışma saatleri) + Axios POST + toast bildirimi

---

## 5. API Route'ları

### Public

```
GET  /api/services
GET  /api/services/[slug]
GET  /api/projects              # ?category=ECOMMERCE&featured=true
GET  /api/projects/[slug]
GET  /api/posts                 # ?published=true&limit=3
GET  /api/posts/[slug]
GET  /api/testimonials          # ?category=ECOMMERCE
POST /api/contact
```

### Admin (Korumalı — NextAuth)

```
POST   /api/admin/auth/login
GET    /api/admin/messages
PUT    /api/admin/messages/[id]/read
POST   /api/admin/projects
PUT    /api/admin/projects/[id]
DELETE /api/admin/projects/[id]
POST   /api/admin/posts
PUT    /api/admin/posts/[id]
DELETE /api/admin/posts/[id]
```

---

## 6. SEO Altyapısı

### `app/sitemap.ts`

```ts
import { MetadataRoute } from 'next'
import prisma from '@/lib/prisma'

const BASE_URL = 'https://yourdomain.com'
const locales = ['tr', 'en']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, posts, services] = await Promise.all([
    prisma.project.findMany({ select: { slug: true, createdAt: true } }),
    prisma.post.findMany({ where: { isPublished: true }, select: { slug: true, updatedAt: true } }),
    prisma.service.findMany({ select: { slug: true } }),
  ])

  const staticPages = ['', '/hizmetler', '/projeler', '/blog', '/hakkimda', '/iletisim']

  const staticEntries = staticPages.flatMap(page =>
    locales.map(locale => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
      alternates: { languages: { tr: `${BASE_URL}/tr${page}`, en: `${BASE_URL}/en${page}` } },
    }))
  )

  const serviceEntries = services.flatMap(s =>
    locales.map(locale => ({
      url: `${BASE_URL}/${locale}/hizmetler/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: { languages: { tr: `${BASE_URL}/tr/hizmetler/${s.slug}`, en: `${BASE_URL}/en/services/${s.slug}` } },
    }))
  )

  const projectEntries = projects.flatMap(p =>
    locales.map(locale => ({
      url: `${BASE_URL}/${locale}/projeler/${p.slug}`,
      lastModified: p.createdAt,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    }))
  )

  const postEntries = posts.flatMap(p =>
    locales.map(locale => ({
      url: `${BASE_URL}/${locale}/blog/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  )

  return [...staticEntries, ...serviceEntries, ...projectEntries, ...postEntries]
}
```

### `app/robots.ts`

```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/admin/', '/api/admin/'] }],
    sitemap: 'https://yourdomain.com/sitemap.xml',
    host: 'https://yourdomain.com',
  }
}
```

### JSON-LD Schema Bileşenleri (`components/seo/`)

| Bileşen | Kullanım Yeri |
|---|---|
| `LocalBusinessSchema.tsx` | Ana layout — işletme adı, adres, çalışma saatleri |
| `ServiceSchema.tsx` | Her hizmet landing page |
| `FAQSchema.tsx` | Her hizmet sayfası — `faqItems` alanından otomatik |
| `ArticleSchema.tsx` | Her blog yazısı |
| `BreadcrumbSchema.tsx` | Tüm alt sayfalar |

### `generateMetadata` — Hizmet Landing Page

```ts
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await getService(params.slug)
  const isTR = params.locale === 'tr'
  return {
    title: isTR ? service.metaTitle_tr : service.metaTitle_en,
    description: isTR ? service.metaDesc_tr : service.metaDesc_en,
    alternates: {
      canonical: `https://yourdomain.com/${params.locale}/hizmetler/${params.slug}`,
      languages: {
        tr: `https://yourdomain.com/tr/hizmetler/${params.slug}`,
        en: `https://yourdomain.com/en/services/${params.slug}`,
      },
    },
    openGraph: {
      title: isTR ? service.metaTitle_tr! : service.metaTitle_en!,
      description: isTR ? service.metaDesc_tr! : service.metaDesc_en!,
      images: [{ url: `/og/${params.slug}.png`, width: 1200, height: 630 }],
      locale: isTR ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  }
}
```

---

## 7. UI Bileşen Sistemi

### shadcn/ui — Fonksiyonel Bileşenler

| Bileşen | Kullanım |
|---|---|
| Form, Input, Select, Textarea | İletişim formu, admin panel |
| Dialog, Sheet | Popup, mobil menü |
| Toast / Sonner | Form bildirimleri |
| Badge | Tech stack etiketleri |
| Skeleton | Loading state'leri |

### Aceternity UI — Görsel Efektler

| Bileşen | Kullanım |
|---|---|
| `BackgroundBeams` | Hero ve CTA section arka planı |
| `MovingBorder` | CTA butonları |
| `BentoGrid` | Hizmetler grid'i |
| `CardHoverEffect` | Portfolio kartları |
| `InfiniteMovingCards` | Testimonial slider |
| `TextGenerateEffect` | Hero başlığı animasyonu |
| `TracingBeam` | Blog yazısı okuma deneyimi |
| `StickyScrollReveal` | Hizmet detay sayfası özellikleri |
| `AnimatedTooltip` | Tech stack ikonları |
| `Tabs` | Portfolio kategori filtresi |
| `Timeline` | Süreç adımları |
| `Spotlight` | Section arka planları |
| `ThreeDCardEffect` | Öne çıkan projeler |

> Aceternity UI bileşenleri npm paketi değil. Her biri [ui.aceternity.com/components](https://ui.aceternity.com/components) adresinden kopyalanıp `components/ui/aceternity/` klasörüne yapıştırılır.

---

## 8. Tasarım Sistemi

### Renkler

```
Primary:   #6C63FF  (Elektrik mor)
Secondary: #00D4AA  (Mint yeşil)
Dark BG:   #0A0A0F
Dark Card: #13131A
Light BG:  #F8F9FF
```

### Tipografi

```
Display: Space Grotesk  — başlıklar
Body:    Inter          — metin
Mono:    JetBrains Mono — kod, badge
```

### Glassmorphism

```css
backdrop-filter: blur(12px);
background: rgba(255,255,255,0.05);
border: 1px solid rgba(255,255,255,0.1);
border-radius: 1rem;
```

### Rendering Stratejisi

| Sayfa | Strateji |
|---|---|
| Ana Sayfa | ISR — `revalidate: 3600` |
| Hizmet Landing | ISR — `revalidate: 86400` |
| Proje Detay | SSG — `generateStaticParams` |
| Blog Yazısı | SSG + on-demand revalidate |
| İletişim | Static |
| Admin Panel | SSR — no-cache |

---

## 9. Railway + Vercel Kurulumu

### `.env.local`

```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
NEXTAUTH_SECRET="guclu-bir-secret-key"
NEXTAUTH_URL="http://localhost:3000"
UPSTASH_REDIS_REST_URL="..."
UPSTASH_REDIS_REST_TOKEN="..."
RESEND_API_KEY="..."
UPLOADTHING_SECRET="..."
UPLOADTHING_APP_ID="..."
```

### Railway Adımları

1. `railway.app` → GitHub ile kayıt
2. New Project → Deploy MySQL
3. Variables sekmesinden bağlantı bilgilerini al
4. Settings → Networking → Public Networking aktif et
5. Oluşan `HOST:PORT`'u `DATABASE_URL`'e yaz

### Prisma Komutları

```bash
npx prisma init
npx prisma db push       # Şemayı Railway'e uygula
npx prisma db seed       # Test verisi ekle
npx prisma studio        # Veritabanını görsel yönet
npx prisma generate      # Deploy öncesi zorunlu
```

### `lib/prisma.ts`

```ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined }

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
```

---

## 10. Güvenlik — Contact API

```ts
// app/api/contact/route.ts
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1h'), // IP başına saatte 5 istek
})

const contactSchema = z.object({
  name:    z.string().min(2).max(100),
  email:   z.string().email(),
  phone:   z.string().optional(),
  subject: z.string().min(5).max(200),
  service: z.string().optional(),
  budget:  z.string().optional(),
  content: z.string().min(20).max(2000),
})
```

---

## 11. Tam Klasör Yapısı

```
freelance-dev-site/
│
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── hizmetler/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── projeler/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── hakkimda/
│   │   │   └── page.tsx
│   │   └── iletisim/
│   │       └── page.tsx
│   ├── admin/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── login/page.tsx
│   │   ├── projeler/
│   │   │   ├── page.tsx
│   │   │   └── yeni/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── yeni/page.tsx
│   │   ├── mesajlar/page.tsx
│   │   └── ayarlar/page.tsx
│   ├── api/
│   │   ├── contact/route.ts
│   │   ├── services/
│   │   │   ├── route.ts
│   │   │   └── [slug]/route.ts
│   │   ├── projects/
│   │   │   ├── route.ts
│   │   │   └── [slug]/route.ts
│   │   ├── posts/
│   │   │   ├── route.ts
│   │   │   └── [slug]/route.ts
│   │   ├── testimonials/route.ts
│   │   └── admin/
│   │       ├── auth/[...nextauth]/route.ts
│   │       ├── projects/
│   │       │   ├── route.ts
│   │       │   └── [id]/route.ts
│   │       ├── posts/
│   │       │   ├── route.ts
│   │       │   └── [id]/route.ts
│   │       └── messages/route.ts
│   ├── opengraph-image.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── manifest.ts
│
├── components/
│   │
│   ├── ui/
│   │   ├── shadcn/                        # shadcn/ui bileşenleri
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── select.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── card.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── form.tsx
│   │   │   ├── label.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   └── index.ts
│   │   ├── aceternity/                    # Aceternity UI bileşenleri
│   │   │   ├── BackgroundBeams.tsx
│   │   │   ├── MovingBorder.tsx
│   │   │   ├── BentoGrid.tsx
│   │   │   ├── CardHoverEffect.tsx
│   │   │   ├── InfiniteMovingCards.tsx
│   │   │   ├── TextGenerateEffect.tsx
│   │   │   ├── TracingBeam.tsx
│   │   │   ├── StickyScrollReveal.tsx
│   │   │   ├── AnimatedTooltip.tsx
│   │   │   ├── Tabs.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── Spotlight.tsx
│   │   │   ├── ThreeDCardEffect.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── layout/
│   │   ├── navbar/
│   │   │   ├── Navbar.tsx
│   │   │   ├── NavbarLogo.tsx
│   │   │   ├── NavbarLinks.tsx
│   │   │   ├── NavbarMobileMenu.tsx
│   │   │   ├── NavbarThemeToggle.tsx
│   │   │   ├── NavbarLangSwitcher.tsx
│   │   │   └── index.ts
│   │   ├── footer/
│   │   │   ├── Footer.tsx
│   │   │   ├── FooterLogo.tsx
│   │   │   ├── FooterLinks.tsx
│   │   │   ├── FooterSocial.tsx
│   │   │   ├── FooterCopyright.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── sections/
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx            # Ana wrapper
│   │   │   ├── HeroVideo.tsx              # Maskeli video
│   │   │   ├── HeroContent.tsx            # Başlık + açıklama
│   │   │   ├── HeroCTA.tsx                # CTA butonları
│   │   │   └── index.ts
│   │   ├── services/
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   └── index.ts
│   │   ├── projects/
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ProjectsGrid.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectFilter.tsx
│   │   │   └── index.ts
│   │   ├── testimonials/
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── TestimonialSlider.tsx
│   │   │   └── index.ts
│   │   ├── process/
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── ProcessStep.tsx
│   │   │   ├── ProcessTimeline.tsx
│   │   │   └── index.ts
│   │   ├── tech-stack/
│   │   │   ├── TechStackSection.tsx
│   │   │   ├── TechBadge.tsx
│   │   │   ├── TechGroup.tsx
│   │   │   └── index.ts
│   │   ├── client-logos/
│   │   │   ├── ClientLogosSection.tsx
│   │   │   ├── ClientLogo.tsx
│   │   │   ├── ClientLogosSlider.tsx
│   │   │   └── index.ts
│   │   ├── blog-preview/
│   │   │   ├── BlogPreviewSection.tsx
│   │   │   ├── BlogPreviewCard.tsx
│   │   │   └── index.ts
│   │   ├── cta/
│   │   │   ├── CTASection.tsx
│   │   │   ├── CTAContent.tsx
│   │   │   ├── CTAButton.tsx
│   │   │   └── index.ts
│   │   └── why-me/
│   │       ├── WhyMeSection.tsx
│   │       ├── WhyMeCard.tsx
│   │       └── index.ts
│   │
│   ├── pages/
│   │   ├── service-detail/
│   │   │   ├── ServiceHero.tsx
│   │   │   ├── ServiceFeatures.tsx        # Sticky scroll
│   │   │   ├── ServiceProcess.tsx
│   │   │   ├── ServiceTech.tsx
│   │   │   ├── ServiceProjects.tsx
│   │   │   ├── ServiceFAQ.tsx
│   │   │   ├── ServiceCTA.tsx
│   │   │   └── index.ts
│   │   ├── project-detail/
│   │   │   ├── ProjectHero.tsx
│   │   │   ├── ProjectMetrics.tsx
│   │   │   ├── ProjectContent.tsx
│   │   │   ├── ProjectGallery.tsx
│   │   │   ├── ProjectTechStack.tsx
│   │   │   ├── ProjectRelated.tsx
│   │   │   └── index.ts
│   │   ├── blog-detail/
│   │   │   ├── BlogHero.tsx
│   │   │   ├── BlogContent.tsx            # Tracing beam
│   │   │   ├── BlogTOC.tsx                # İçindekiler
│   │   │   ├── BlogRelated.tsx
│   │   │   └── index.ts
│   │   ├── contact/
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ContactFormFields.tsx
│   │   │   ├── ContactInfo.tsx
│   │   │   ├── ContactSocial.tsx
│   │   │   └── index.ts
│   │   └── about/
│   │       ├── AboutHero.tsx
│   │       ├── AboutStory.tsx
│   │       ├── AboutSkills.tsx
│   │       ├── AboutExperience.tsx
│   │       └── index.ts
│   │
│   ├── admin/
│   │   ├── layout/
│   │   │   ├── AdminSidebar.tsx
│   │   │   ├── AdminHeader.tsx
│   │   │   ├── AdminNav.tsx
│   │   │   └── index.ts
│   │   ├── dashboard/
│   │   │   ├── DashboardStats.tsx
│   │   │   ├── DashboardStatCard.tsx
│   │   │   ├── RecentMessages.tsx
│   │   │   └── index.ts
│   │   ├── projects/
│   │   │   ├── ProjectsTable.tsx
│   │   │   ├── ProjectsTableRow.tsx
│   │   │   ├── ProjectForm.tsx
│   │   │   ├── ProjectFormFields.tsx
│   │   │   └── index.ts
│   │   ├── blog/
│   │   │   ├── PostsTable.tsx
│   │   │   ├── PostsTableRow.tsx
│   │   │   ├── PostForm.tsx
│   │   │   ├── PostEditor.tsx
│   │   │   └── index.ts
│   │   └── messages/
│   │       ├── MessagesTable.tsx
│   │       ├── MessagesTableRow.tsx
│   │       ├── MessageDetail.tsx
│   │       └── index.ts
│   │
│   └── seo/
│       ├── LocalBusinessSchema.tsx
│       ├── ServiceSchema.tsx
│       ├── FAQSchema.tsx
│       ├── ArticleSchema.tsx
│       ├── BreadcrumbSchema.tsx
│       └── index.ts
│
├── lib/
│   ├── prisma.ts
│   ├── axios.ts
│   └── utils.ts
│
├── store/
│   ├── index.ts
│   ├── themeSlice.ts
│   └── uiSlice.ts
│
├── hooks/
│   ├── useTheme.ts
│   ├── useTranslation.ts
│   └── useScrollReveal.ts
│
├── types/
│   ├── index.ts
│   ├── project.ts
│   ├── service.ts
│   ├── post.ts
│   └── testimonial.ts
│
├── messages/
│   ├── tr.json
│   └── en.json
│
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
│
├── public/
│   ├── videos/
│   │   ├── hero.mp4
│   │   ├── hero.webm
│   │   └── hero-poster.jpg
│   ├── icons/
│   └── og/
│
├── middleware.ts
├── i18n.ts
├── next.config.ts
├── tailwind.config.ts
├── AGENTS.md
└── .env.local
```

---

## 12. Kurulum Sırası

1. Next.js init + TypeScript + Tailwind
2. Railway → MySQL oluştur → `DATABASE_URL` al
3. Prisma kurulum → `schema.prisma` → `db push`
4. next-intl → middleware → `messages/tr.json` + `messages/en.json`
5. `lib/axios.ts` + `lib/prisma.ts` + `lib/utils.ts`
6. Zustand store (`theme`, `mobileMenu`)
7. shadcn/ui init + bileşenleri `components/ui/shadcn/` klasörüne kur
8. Aceternity UI bileşenlerini `components/ui/aceternity/` klasörüne kopyala
9. `tailwind.config.ts` (renkler, fontlar, animasyonlar)
10. Global layout → `components/layout/navbar/` + `components/layout/footer/`
11. API route'ları (public endpoints)
12. Hero video temin et → `public/videos/` klasörüne ekle
13. Ana sayfa → `components/sections/` altındaki tüm section'lar
14. Hizmet landing page'leri (5 adet) → `components/pages/service-detail/`
15. Portfolio + Proje detay → `components/pages/project-detail/`
16. Blog + Yazı detay → `components/pages/blog-detail/`
17. İletişim sayfası → `components/pages/contact/`
18. Hakkımda sayfası → `components/pages/about/`
19. Admin panel → `components/admin/`
20. SEO: `sitemap.ts`, `robots.ts`, `manifest.ts`, JSON-LD schema bileşenleri
21. Vercel deploy + env variable'lar