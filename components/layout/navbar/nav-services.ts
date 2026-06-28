import { serviceItems } from "@/components/sections/services/service-items";

export type NavServiceKey =
  | "serviceWeb"
  | "serviceRefresh"
  | "serviceApp"
  | "serviceSeo"
  | "serviceAudit"
  | "serviceMaintenance";

export type NavServiceItem = {
  href: string;
  navKey: NavServiceKey;
};

export const navServiceItems: NavServiceItem[] = serviceItems.map(
  (service) => ({
    href: service.href,
    navKey: service.navDescKey.replace(/Desc$/, "") as NavServiceKey,
  }),
);
