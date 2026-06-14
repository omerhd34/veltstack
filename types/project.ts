export type ProjectCategory =
  | "CORPORATE"
  | "ECOMMERCE"
  | "MOBILE"
  | "PORTFOLIO"
  | "SEO"
  | "OTHER"

export interface Project {
  id: string
  slug: string
  title_tr: string
  title_en: string
  description_tr: string
  description_en: string
  content_tr: string
  content_en: string
  imageUrl: string
  images: unknown
  liveUrl: string | null
  githubUrl: string | null
  isFeatured: boolean
  category: ProjectCategory
  clientName: string | null
  duration: string | null
  result: string | null
  serviceId: string | null
  createdAt: Date
}
