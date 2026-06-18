import type { ProjectSlug } from "@/components/sections/projects/project-items";
import type { ServiceSlug } from "@/components/sections/services/service-items";

export const projectRelatedServices: Record<ProjectSlug, ServiceSlug[]> = {
  iqfinansai: ["web-sitesi", "uygulama", "seo-hizmetleri", "bakim-ve-destek"],
  "yazici-ticaret": ["web-sitesi", "seo-hizmetleri", "bakim-ve-destek"],
  fablessi: ["web-sitesi", "seo-hizmetleri", "bakim-ve-destek"],
  "uzman-klinik-psikolog": ["web-sitesi", "seo-hizmetleri", "bakim-ve-destek"],
};
