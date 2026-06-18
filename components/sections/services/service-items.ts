import type { IconType } from "react-icons";
import { LuGlobe, LuLifeBuoy, LuSearch, LuSmartphone } from "react-icons/lu";

export const serviceSlugs = [
  "web-sitesi",
  "uygulama",
  "seo-hizmetleri",
  "bakim-ve-destek",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export interface ServiceItemConfig {
  slug: ServiceSlug;
  href: string;
  titleKey: string;
  descKey: string;
  tagKey: string;
  icon: IconType;
}

export const serviceItems: ServiceItemConfig[] = [
  {
    slug: "web-sitesi",
    href: "/hizmetler/web-sitesi",
    titleKey: "servicesWebTitle",
    descKey: "servicesWebDesc",
    tagKey: "servicesWebTag",
    icon: LuGlobe,
  },
  {
    slug: "uygulama",
    href: "/hizmetler/uygulama",
    titleKey: "servicesAppTitle",
    descKey: "servicesAppDesc",
    tagKey: "servicesAppTag",
    icon: LuSmartphone,
  },
  {
    slug: "seo-hizmetleri",
    href: "/hizmetler/seo-hizmetleri",
    titleKey: "servicesSeoTitle",
    descKey: "servicesSeoDesc",
    tagKey: "servicesSeoTag",
    icon: LuSearch,
  },
  {
    slug: "bakim-ve-destek",
    href: "/hizmetler/bakim-ve-destek",
    titleKey: "servicesMaintenanceTitle",
    descKey: "servicesMaintenanceDesc",
    tagKey: "servicesMaintenanceTag",
    icon: LuLifeBuoy,
  },
];

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return serviceSlugs.includes(slug as ServiceSlug);
}
