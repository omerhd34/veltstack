import type { IconType } from "react-icons";
import {
  LuBriefcase,
  LuCodeXml,
  LuGlobe,
  LuSearch,
  LuShoppingCart,
  LuSmartphone,
} from "react-icons/lu";

export interface ServiceItemConfig {
  href: string;
  titleKey: string;
  descKey: string;
  tagKey: string;
  icon: IconType;
}

export const serviceItems: ServiceItemConfig[] = [
  {
    href: "/hizmetler/kurumsal-web-sitesi",
    titleKey: "servicesCorporateTitle",
    descKey: "servicesCorporateDesc",
    tagKey: "servicesCorporateTag",
    icon: LuGlobe,
  },
  {
    href: "/hizmetler/e-ticaret",
    titleKey: "servicesEcommerceTitle",
    descKey: "servicesEcommerceDesc",
    tagKey: "servicesEcommerceTag",
    icon: LuShoppingCart,
  },
  {
    href: "/hizmetler/mobil-uygulama",
    titleKey: "servicesMobileTitle",
    descKey: "servicesMobileDesc",
    tagKey: "servicesMobileTag",
    icon: LuSmartphone,
  },
  {
    href: "/hizmetler/seo-hizmetleri",
    titleKey: "servicesSeoTitle",
    descKey: "servicesSeoDesc",
    tagKey: "servicesSeoTag",
    icon: LuSearch,
  },
  {
    href: "/hizmetler/portfolyo-sitesi",
    titleKey: "servicesPortfolioTitle",
    descKey: "servicesPortfolioDesc",
    tagKey: "servicesPortfolioTag",
    icon: LuBriefcase,
  },
  {
    href: "/hizmetler/api-gelistirme",
    titleKey: "servicesApiTitle",
    descKey: "servicesApiDesc",
    tagKey: "servicesApiTag",
    icon: LuCodeXml,
  },
];
