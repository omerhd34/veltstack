import { servicesPackagesTr } from "./packages-tr";

export const servicesPageTr = {
  heroBadge: "Dijital Hizmetler",
  heroTitle: "Web ve mobil projeleriniz için net paketler",
  heroSubtitle:
    "Her proje tipi üç kademede sunulur: Temel, Standart ve Pro. Kapsam, teslim süresi ve revizyon sayısı baştan netleştirilir — büyük projeler sınırsız ölçeklenebilir.",
  heroSubtitleSecondary:
    "Paketleri inceleyin; web sitesi, uygulama, SEO ve API sekmeleri arasında geçiş yaparak size en uygun kapsamı belirleyin.",
  heroImageAlt: "Dijital geliştirme çalışma ortamı",
  scrollLabel: "Paketleri incele",
  ctaTitle: "Paket seçiminde yardım mı lazım?",
  ctaSubtitle:
    "Ücretsiz görüşmede projenizi dinleyip doğru paketi birlikte belirleyelim.",
  ctaButton: "Görüşme Planla",
  ctaNote: "24 saat içinde dönüş",
  stats: [
    { value: "3", label: "Paket Seviyesi" },
    { value: "4", label: "Hizmet Tipi" },
    { value: "Sınırsız", label: "Sayfa Kapasitesi" },
    { value: "98%", label: "Memnuniyet" },
  ],
  ...servicesPackagesTr,
} as const;
