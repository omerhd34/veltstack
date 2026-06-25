import type { IconType } from "react-icons";
import {
  LuClipboardCheck,
  LuGlobe,
  LuLifeBuoy,
  LuRefreshCw,
  LuSearch,
  LuSmartphone,
} from "react-icons/lu";

export const serviceSlugs = [
  "web-sitesi",
  "web-sitesi-yenileme",
  "uygulama",
  "seo-hizmetleri",
  "teknik-denetim",
  "bakim-ve-destek",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export interface ServiceItemConfig {
  slug: ServiceSlug;
  href: string;
  titleKey: string;
  descKey: string;
  navDescKey: string;
  tagKey: string;
  icon: IconType;
}

export const serviceItems: ServiceItemConfig[] = [
  {
    slug: "web-sitesi",
    href: "/hizmetler/web-sitesi",
    titleKey: "servicesWebTitle",
    descKey: "servicesWebDesc",
    navDescKey: "serviceWebDesc",
    tagKey: "servicesWebTag",
    icon: LuGlobe,
  },
  {
    slug: "web-sitesi-yenileme",
    href: "/hizmetler/web-sitesi-yenileme",
    titleKey: "servicesRefreshTitle",
    descKey: "servicesRefreshDesc",
    navDescKey: "serviceRefreshDesc",
    tagKey: "servicesRefreshTag",
    icon: LuRefreshCw,
  },
  {
    slug: "uygulama",
    href: "/hizmetler/uygulama",
    titleKey: "servicesAppTitle",
    descKey: "servicesAppDesc",
    navDescKey: "serviceAppDesc",
    tagKey: "servicesAppTag",
    icon: LuSmartphone,
  },
  {
    slug: "seo-hizmetleri",
    href: "/hizmetler/seo-hizmetleri",
    titleKey: "servicesSeoTitle",
    descKey: "servicesSeoDesc",
    navDescKey: "serviceSeoDesc",
    tagKey: "servicesSeoTag",
    icon: LuSearch,
  },
  {
    slug: "teknik-denetim",
    href: "/hizmetler/teknik-denetim",
    titleKey: "servicesAuditTitle",
    descKey: "servicesAuditDesc",
    navDescKey: "serviceAuditDesc",
    tagKey: "servicesAuditTag",
    icon: LuClipboardCheck,
  },
  {
    slug: "bakim-ve-destek",
    href: "/hizmetler/bakim-ve-destek",
    titleKey: "servicesMaintenanceTitle",
    descKey: "servicesMaintenanceDesc",
    navDescKey: "serviceMaintenanceDesc",
    tagKey: "servicesMaintenanceTag",
    icon: LuLifeBuoy,
  },
];

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return serviceSlugs.includes(slug as ServiceSlug);
}
