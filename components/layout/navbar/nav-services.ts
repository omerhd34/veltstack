export const navServiceItems = [
  { href: "/hizmetler/kurumsal-web-sitesi", navKey: "serviceCorporate" },
  { href: "/hizmetler/e-ticaret", navKey: "serviceEcommerce" },
  { href: "/hizmetler/mobil-uygulama", navKey: "serviceMobile" },
  { href: "/hizmetler/seo-hizmetleri", navKey: "serviceSeo" },
  { href: "/hizmetler/portfolyo-sitesi", navKey: "servicePortfolio" },
  { href: "/hizmetler/api-gelistirme", navKey: "serviceApi" },
] as const

export type NavServiceKey = (typeof navServiceItems)[number]["navKey"]
