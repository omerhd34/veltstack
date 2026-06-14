import type { LucideIcon } from "lucide-react"
import { Brain, LineChart, ShoppingCart, TreePine } from "lucide-react"

export const projectSlugs = [
  "iqfinansai",
  "yazici-ticaret",
  "fablessi",
  "uzman-klinik-psikolog",
] as const

export const homepageProjectSlugs = [
  "iqfinansai",
  "uzman-klinik-psikolog",
  "yazici-ticaret",
  "fablessi",
] as const

export type ProjectSlug = (typeof projectSlugs)[number]

export interface ProjectItemConfig {
  slug: ProjectSlug
  href: string
  titleKey: string
  descKey: string
  tagKey: string
  icon: LucideIcon
}

export const projectItems: ProjectItemConfig[] = [
  {
    slug: "iqfinansai",
    href: "/projeler/iqfinansai",
    titleKey: "projectIqfinansTitle",
    descKey: "projectIqfinansDesc",
    tagKey: "projectIqfinansTag",
    icon: LineChart,
  },
  {
    slug: "yazici-ticaret",
    href: "/projeler/yazici-ticaret",
    titleKey: "projectYaziciTitle",
    descKey: "projectYaziciDesc",
    tagKey: "projectYaziciTag",
    icon: ShoppingCart,
  },
  {
    slug: "fablessi",
    href: "/projeler/fablessi",
    titleKey: "projectFablessiTitle",
    descKey: "projectFablessiDesc",
    tagKey: "projectFablessiTag",
    icon: TreePine,
  },
  {
    slug: "uzman-klinik-psikolog",
    href: "/projeler/uzman-klinik-psikolog",
    titleKey: "projectUzmanPsikologTitle",
    descKey: "projectUzmanPsikologDesc",
    tagKey: "projectUzmanPsikologTag",
    icon: Brain,
  },
]

export const homepageProjectItems = projectItems.filter((item) =>
  (homepageProjectSlugs as readonly string[]).includes(item.slug),
)

export function isProjectSlug(slug: string): slug is ProjectSlug {
  return projectSlugs.includes(slug as ProjectSlug)
}
