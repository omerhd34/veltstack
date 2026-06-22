export const navServiceItems = [
  { href: "/hizmetler/web-sitesi", navKey: "serviceWeb" },
  { href: "/hizmetler/web-sitesi-yenileme", navKey: "serviceRefresh" },
  { href: "/hizmetler/uygulama", navKey: "serviceApp" },
  { href: "/hizmetler/seo-hizmetleri", navKey: "serviceSeo" },
  { href: "/hizmetler/teknik-denetim", navKey: "serviceAudit" },
  { href: "/hizmetler/bakim-ve-destek", navKey: "serviceMaintenance" },
] as const

export type NavServiceKey = (typeof navServiceItems)[number]["navKey"]
