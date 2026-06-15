import type { IconType } from "react-icons";
import {
  LuBriefcase,
  LuCodeXml,
  LuGlobe,
  LuSearch,
  LuShoppingCart,
  LuSmartphone,
} from "react-icons/lu";

export const serviceSlugs = [
  "kurumsal-web-sitesi",
  "e-ticaret",
  "mobil-uygulama",
  "seo-hizmetleri",
  "portfolyo-sitesi",
  "api-gelistirme",
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
    slug: "kurumsal-web-sitesi",
    href: "/hizmetler/kurumsal-web-sitesi",
    titleKey: "servicesCorporateTitle",
    descKey: "servicesCorporateDesc",
    tagKey: "servicesCorporateTag",
    icon: LuGlobe,
  },
  {
    slug: "e-ticaret",
    href: "/hizmetler/e-ticaret",
    titleKey: "servicesEcommerceTitle",
    descKey: "servicesEcommerceDesc",
    tagKey: "servicesEcommerceTag",
    icon: LuShoppingCart,
  },
  {
    slug: "mobil-uygulama",
    href: "/hizmetler/mobil-uygulama",
    titleKey: "servicesMobileTitle",
    descKey: "servicesMobileDesc",
    tagKey: "servicesMobileTag",
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
    slug: "portfolyo-sitesi",
    href: "/hizmetler/portfolyo-sitesi",
    titleKey: "servicesPortfolioTitle",
    descKey: "servicesPortfolioDesc",
    tagKey: "servicesPortfolioTag",
    icon: LuBriefcase,
  },
  {
    slug: "api-gelistirme",
    href: "/hizmetler/api-gelistirme",
    titleKey: "servicesApiTitle",
    descKey: "servicesApiDesc",
    tagKey: "servicesApiTag",
    icon: LuCodeXml,
  },
];

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return serviceSlugs.includes(slug as ServiceSlug);
}
