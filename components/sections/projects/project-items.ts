import type { IconType } from "react-icons";
import {
  LuBrain,
  LuCalculator,
  LuChartLine,
  LuGlobe,
  LuShoppingCart,
  LuTreePine,
} from "react-icons/lu";

export const projectSlugs = [
  "iqfinansai",
  "yazici-ticaret",
  "fablessi",
  "uzman-klinik-psikolog",
  "portfolio",
  "onlinemuhasebe",
] as const;

export const homepageProjectSlugs = projectSlugs;

export type ProjectSlug = (typeof projectSlugs)[number];

export interface ProjectItemConfig {
  slug: ProjectSlug;
  href: string;
  titleKey: string;
  descKey: string;
  navDescKey: string;
  tagKey: string;
  icon: IconType;
  external?: boolean;
}

export const projectItems: ProjectItemConfig[] = [
  {
    slug: "iqfinansai",
    href: "/projeler/iqfinansai",
    titleKey: "projectIqfinansTitle",
    descKey: "projectIqfinansDesc",
    navDescKey: "projectIqfinansDesc",
    tagKey: "projectIqfinansTag",
    icon: LuChartLine,
  },
  {
    slug: "yazici-ticaret",
    href: "/projeler/yazici-ticaret",
    titleKey: "projectYaziciTitle",
    descKey: "projectYaziciDesc",
    navDescKey: "projectYaziciDesc",
    tagKey: "projectYaziciTag",
    icon: LuShoppingCart,
  },
  {
    slug: "fablessi",
    href: "/projeler/fablessi",
    titleKey: "projectFablessiTitle",
    descKey: "projectFablessiDesc",
    navDescKey: "projectFablessiDesc",
    tagKey: "projectFablessiTag",
    icon: LuTreePine,
  },
  {
    slug: "uzman-klinik-psikolog",
    href: "/projeler/uzman-klinik-psikolog",
    titleKey: "projectUzmanPsikologTitle",
    descKey: "projectUzmanPsikologDesc",
    navDescKey: "projectUzmanPsikologDesc",
    tagKey: "projectUzmanPsikologTag",
    icon: LuBrain,
  },
  {
    slug: "portfolio",
    href: "/projeler/portfolio",
    titleKey: "projectPortfolioTitle",
    descKey: "projectPortfolioDesc",
    navDescKey: "projectPortfolioDesc",
    tagKey: "projectPortfolioTag",
    icon: LuGlobe,
  },
  {
    slug: "onlinemuhasebe",
    href: "/projeler/onlinemuhasebe",
    titleKey: "projectOnlinemuhasebeTitle",
    descKey: "projectOnlinemuhasebeDesc",
    navDescKey: "projectOnlinemuhasebeDesc",
    tagKey: "projectOnlinemuhasebeTag",
    icon: LuCalculator,
  },
];

export const homepageProjectItems = projectItems.filter((item) =>
  (homepageProjectSlugs as readonly string[]).includes(item.slug),
);

export function isProjectSlug(slug: string): slug is ProjectSlug {
  return projectSlugs.includes(slug as ProjectSlug);
}
