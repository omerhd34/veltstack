export interface Post {
  id: string
  slug: string
  title_tr: string
  title_en: string
  excerpt_tr: string
  excerpt_en: string
  content_tr: string
  content_en: string
  imageUrl: string | null
  category: string
  tags: unknown
  isPublished: boolean
  metaTitle_tr: string | null
  metaTitle_en: string | null
  metaDesc_tr: string | null
  metaDesc_en: string | null
  readingTime: number | null
  createdAt: Date
  updatedAt: Date
}
