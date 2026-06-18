import type { IconType } from "react-icons";
import {
  LuBuilding2,
  LuCodeXml,
  LuContact,
  LuGlobe,
  LuLifeBuoy,
  LuMonitorSmartphone,
  LuSearch,
  LuServer,
  LuShieldCheck,
  LuShoppingCart,
  LuSmartphone,
  LuTrendingUp,
} from "react-icons/lu";

export const packageCategories = [
  "web",
  "app",
  "seo",
  "api",
  "maintenance",
] as const;
export type PackageCategory = (typeof packageCategories)[number];

export const categoryTabIcons: Record<PackageCategory, IconType> = {
  web: LuGlobe,
  app: LuSmartphone,
  seo: LuSearch,
  api: LuCodeXml,
  maintenance: LuLifeBuoy,
};

export const webPackageSlugs = ["portfolio", "corporate", "ecommerce"] as const;
export const seoPackageSlugs = ["audit", "growth", "enterprise"] as const;
export const apiPackageSlugs = ["starter", "scale", "enterprise"] as const;
export const maintenancePackageSlugs = [
  "webApp",
  "backendCloud",
  "enterpriseSLA",
] as const;

export type WebPackageSlug = (typeof webPackageSlugs)[number];
export type SeoPackageSlug = (typeof seoPackageSlugs)[number];
export type ApiPackageSlug = (typeof apiPackageSlugs)[number];
export type MaintenancePackageSlug = (typeof maintenancePackageSlugs)[number];

export type PackageTier = "temel" | "standart" | "pro";

export const webPackageIcons: Record<WebPackageSlug, IconType> = {
  portfolio: LuContact,
  corporate: LuBuilding2,
  ecommerce: LuShoppingCart,
};

export const appPackageIcons: Record<WebPackageSlug, IconType> = {
  portfolio: LuSmartphone,
  corporate: LuBuilding2,
  ecommerce: LuShoppingCart,
};

export const seoPackageIcons: Record<SeoPackageSlug, IconType> = {
  audit: LuSearch,
  growth: LuTrendingUp,
  enterprise: LuBuilding2,
};

export const apiPackageIcons: Record<ApiPackageSlug, IconType> = {
  starter: LuCodeXml,
  scale: LuServer,
  enterprise: LuServer,
};

export const maintenancePackageIcons: Record<MaintenancePackageSlug, IconType> =
  {
    webApp: LuMonitorSmartphone,
    backendCloud: LuServer,
    enterpriseSLA: LuShieldCheck,
  };

export const categoryPackageSlugs: Record<PackageCategory, readonly string[]> =
  {
    web: webPackageSlugs,
    app: webPackageSlugs,
    seo: seoPackageSlugs,
    api: apiPackageSlugs,
    maintenance: maintenancePackageSlugs,
  };

export const categoryIcons: Record<
  PackageCategory,
  Record<string, IconType>
> = {
  web: webPackageIcons,
  app: appPackageIcons,
  seo: seoPackageIcons,
  api: apiPackageIcons,
  maintenance: maintenancePackageIcons,
};
