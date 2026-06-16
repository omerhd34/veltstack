import type { ProjectSlug } from "@/components/sections/projects/project-items";
import type { ServiceSlug } from "@/components/sections/services/service-items";

export const projectRelatedServices: Record<ProjectSlug, ServiceSlug[]> = {
  iqfinansai: ["mobil-uygulama", "portfolyo-sitesi", "api-gelistirme"],
  "yazici-ticaret": ["e-ticaret", "seo-hizmetleri", "api-gelistirme"],
  fablessi: ["kurumsal-web-sitesi", "portfolyo-sitesi", "seo-hizmetleri"],
  "uzman-klinik-psikolog": [
    "kurumsal-web-sitesi",
    "seo-hizmetleri",
    "portfolyo-sitesi",
  ],
};
