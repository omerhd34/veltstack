import type { IconType } from "react-icons";
import {
  LuBuilding2,
  LuContact,
  LuGlobe,
  LuLifeBuoy,
  LuSearch,
  LuShoppingCart,
  LuSmartphone,
} from "react-icons/lu";

export const packageCategories = [
  "web",
  "app",
  "seo",
  "maintenance",
] as const;
export type PackageCategory = (typeof packageCategories)[number];

export const categoryTabIcons: Record<PackageCategory, IconType> = {
  web: LuGlobe,
  app: LuSmartphone,
  seo: LuSearch,
  maintenance: LuLifeBuoy,
};

export const webPackageSlugs = ["portfolio", "corporate", "ecommerce"] as const;
export const seoPackageSlugs = ["seoServices"] as const;
export const maintenancePackageSlugs = ["maintenanceServices"] as const;

export type WebPackageSlug = (typeof webPackageSlugs)[number];
export type SeoPackageSlug = (typeof seoPackageSlugs)[number];
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
  seoServices: LuSearch,
};

export const maintenancePackageIcons: Record<MaintenancePackageSlug, IconType> =
  {
    maintenanceServices: LuLifeBuoy,
  };

export const categoryPackageSlugs: Record<PackageCategory, readonly string[]> =
  {
    web: webPackageSlugs,
    app: webPackageSlugs,
    seo: seoPackageSlugs,
    maintenance: maintenancePackageSlugs,
  };

export const categoryIcons: Record<
  PackageCategory,
  Record<string, IconType>
> = {
  web: webPackageIcons,
  app: appPackageIcons,
  seo: seoPackageIcons,
  maintenance: maintenancePackageIcons,
};
