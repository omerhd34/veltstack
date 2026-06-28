import type { ProjectSlug } from "@/components/sections/projects/project-items";
import type { ServiceSlug } from "@/components/sections/services/service-items";

export const projectRelatedServices: Record<ProjectSlug, ServiceSlug[]> = {
  iqfinansai: ["web-sitesi-gelistirme", "web-sitesi-yenileme", "uygulama-gelistirme", "seo-hizmetleri", "teknik-denetim", "bakim-ve-destek"],
  "yazici-ticaret": ["web-sitesi-gelistirme", "web-sitesi-yenileme", "seo-hizmetleri", "teknik-denetim", "bakim-ve-destek"],
  fablessi: ["web-sitesi-gelistirme", "web-sitesi-yenileme", "seo-hizmetleri", "teknik-denetim", "bakim-ve-destek"],
  "uzman-klinik-psikolog": ["web-sitesi-gelistirme", "web-sitesi-yenileme", "seo-hizmetleri", "teknik-denetim", "bakim-ve-destek"],
  portfolio: ["web-sitesi-gelistirme", "web-sitesi-yenileme", "seo-hizmetleri", "bakim-ve-destek"],
  onlinemuhasebe: ["web-sitesi-gelistirme", "web-sitesi-yenileme", "seo-hizmetleri", "bakim-ve-destek"],
};
