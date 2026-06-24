export const navProjectItems = [
  { href: "/projeler/iqfinansai", navKey: "projectIqfinans" },
  { href: "/projeler/yazici-ticaret", navKey: "projectYazici" },
  { href: "/projeler/fablessi", navKey: "projectFablessi" },
  { href: "/projeler/uzman-klinik-psikolog", navKey: "projectUzmanPsikolog" },
  {
    href: "/projeler/portfolio",
    navKey: "projectPortfolio",
  },
  {
    href: "/projeler/onlinemuhasebe",
    navKey: "projectOnlinemuhasebe",
  },
] as const;

export type NavProjectKey = (typeof navProjectItems)[number]["navKey"];
