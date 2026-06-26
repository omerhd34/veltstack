import { servicesPackagesTr } from "./packages-tr";

export const servicesPageTr = {
  heroBadge: "Dijital Hizmetler",
  heroTitle: "Web ve mobil projeleriniz için net paketler",
  heroSubtitle:
    "Her proje tipi üç kademede sunulur: Temel, Standart ve Pro. Kapsam, teslim süresi ve revizyon sayısı baştan netleştirilir, büyük projeler sınırsız ölçeklenebilir.",
  heroSubtitleSecondary:
    "Paketleri inceleyin; web sitesi, uygulama, yenileme, SEO, teknik denetim ve bakım sekmeleri arasında geçiş yaparak size en uygun kapsamı belirleyin.",
  heroImageAlt: "Dijital geliştirme çalışma ortamı",
  scrollLabel: "Paketleri incele",
  ctaBadge: "Ücretsiz Görüşme",
  ctaTagline: "Doğru paketi birlikte seçelim",
  ctaTitle: "Paket seçiminde yardım mı lazım?",
  ctaTitleLead: "Paket seçiminde",
  ctaTitleAccent: "yardım mı lazım?",
  ctaSubtitle:
    "Ücretsiz görüşmede projenizi dinleyip doğru paketi birlikte belirleyelim.",
  ctaPoint1: "Ücretsiz keşif görüşmesi",
  ctaPoint2: "Size özel paket önerisi",
  ctaPoint3: "Net kapsam ve fiyat",
  ctaButton: "Görüşme Planla",
  ctaNote: "24 saat içinde dönüş",
  stats: [
    { value: "3-112", label: "Teslim Süresi (Gün)" },
    { value: "15-45", label: "Destek Süresi (Gün)" },
    { value: "6", label: "Hizmet Tipi" },
    { value: "14", label: "Hazır Paket" },
  ],
  ...servicesPackagesTr,
} as const;
