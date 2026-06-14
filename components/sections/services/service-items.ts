import type { LucideIcon } from "lucide-react"
import {
  Briefcase,
  Code2,
  Globe,
  Search,
  ShoppingCart,
  Smartphone,
} from "lucide-react"

export interface ServiceItemConfig {
  href: string
  titleKey: string
  descKey: string
  tagKey: string
  icon: LucideIcon
}

export const serviceItems: ServiceItemConfig[] = [
  {
    href: "/hizmetler/kurumsal-web-sitesi",
    titleKey: "servicesCorporateTitle",
    descKey: "servicesCorporateDesc",
    tagKey: "servicesCorporateTag",
    icon: Globe,
  },
  {
    href: "/hizmetler/e-ticaret",
    titleKey: "servicesEcommerceTitle",
    descKey: "servicesEcommerceDesc",
    tagKey: "servicesEcommerceTag",
    icon: ShoppingCart,
  },
  {
    href: "/hizmetler/mobil-uygulama",
    titleKey: "servicesMobileTitle",
    descKey: "servicesMobileDesc",
    tagKey: "servicesMobileTag",
    icon: Smartphone,
  },
  {
    href: "/hizmetler/seo-hizmetleri",
    titleKey: "servicesSeoTitle",
    descKey: "servicesSeoDesc",
    tagKey: "servicesSeoTag",
    icon: Search,
  },
  {
    href: "/hizmetler/portfolyo-sitesi",
    titleKey: "servicesPortfolioTitle",
    descKey: "servicesPortfolioDesc",
    tagKey: "servicesPortfolioTag",
    icon: Briefcase,
  },
  {
    href: "/hizmetler/api-gelistirme",
    titleKey: "servicesApiTitle",
    descKey: "servicesApiDesc",
    tagKey: "servicesApiTag",
    icon: Code2,
  },
]
