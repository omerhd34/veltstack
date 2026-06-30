# Veltstack

Ömer Halis Demir'in full stack geliştirici markası için tasarlanmış, çok dilli hizmet sitesi ve içerik yönetim paneli.

Veltstack; kurumsal web siteleri, mobil uygulamalar, SEO çalışmaları ile bakım ve destek hizmetlerini tek çatı altında sunan solo bir geliştirici markasıdır. Dışarıdan ajans disiplini ve premium bir sunum dili taşır; ancak arkasında çok kişilik bir ekip değil, doğrudan geliştiriciyle çalışmayı hedefleyen net ve şeffaf bir yapı vardır.

Public tarafta ziyaretçiler hizmetleri inceleyebilir, tamamlanan projeleri keşfedebilir, blog içeriklerine ulaşabilir, hakkımda sayfasından markanın hikâyesini okuyabilir ve iletişim formu üzerinden proje talebi iletebilir. Tüm bu sayfalar Türkçe ve İngilizce olarak sunulur; varsayılan dil Türkçe'dir.

Admin paneli ise site içeriğinin, projelerin, blog yazılarının ve gelen mesajların merkezi olarak yönetilmesini sağlar. Böylece Veltstack hem müşteriye dönük vitrin hem de günlük operasyonlar için tek bir dijital merkez işlevi görür.

## Özellikler

- **Çok dilli public site** — `tr` (varsayılan) ve `en`; `next-intl` ile locale routing
- **Hizmetler, projeler, blog** — Dinamik içerik sayfaları ve detay görünümleri
- **İletişim formu** — Rate limit (Upstash) ve e-posta bildirimi (Resend)
- **Admin panel** — İçerik yönetimi, mesajlar ve site ayarları (`next-auth`)
- **Premium UI** — Tailwind CSS 4, shadcn/ui, dark mode, glassmorphism detayları
- **Veritabanı** — Prisma + MySQL; çok dilli alanlar `_tr` / `_en` suffix ile

## Teknoloji Yığını

| Katman | Teknoloji |
|--------|-----------|
| Framework | Next.js 16 (App Router), React 19 |
| Dil | TypeScript |
| Stil | Tailwind CSS 4, shadcn/ui, Lightswind |
| Veritabanı | Prisma, MySQL |
| i18n | next-intl |
| Auth | next-auth |
| Doğrulama | Zod |
| State | Zustand |
| E-posta | Resend |
| Rate limit | Upstash Redis |

## Proje Yapısı

```
app/
├── [locale]/          # Public sayfalar (hizmetler, projeler, blog, hakkımda, iletişim)
├── admin/             # Admin panel
└── api/               # Route handlers

components/
├── sections/          # Ana sayfa bölümleri
├── pages/             # Sayfa bileşenleri
├── admin/             # Admin bileşenleri
├── layout/            # Navbar, footer
└── ui/shadcn/         # shadcn UI bileşenleri

i18n/                  # Locale routing yapılandırması
messages/              # Ana i18n mesaj birleştirmesi (tr.ts, en.ts)
prisma/                # Şema ve seed
lib/                   # Yardımcı modüller (prisma, utils, axios)
```

## Rotalar

### Public (`/app/[locale]/`)

| Rota | Sayfa |
|------|-------|
| `/` | Ana sayfa |
| `/hizmetler` | Hizmet listesi |
| `/hizmetler/[slug]` | Hizmet detayı |
| `/projeler` | Proje listesi |
| `/projeler/[slug]` | Proje detayı |
| `/blog` | Blog listesi |
| `/blog/[slug]` | Blog yazısı |
| `/hakkimda` | Hakkımda |
| `/iletisim` | İletişim |

Varsayılan dil `tr` olduğundan Türkçe rotalar prefix'siz çalışır (`localePrefix: "as-needed"`). İngilizce için `/en/...` kullanılır.

### Admin (`/app/admin/`)

| Rota | Sayfa |
|------|-------|
| `/admin/login` | Giriş |
| `/admin` | Dashboard |
| `/admin/projeler` | Proje yönetimi |
| `/admin/blog` | Blog yönetimi |
| `/admin/mesajlar` | Gelen mesajlar |
| `/admin/ayarlar` | Site ayarları |

## Lisans

Bu proje özel (`private`) bir depodur.
