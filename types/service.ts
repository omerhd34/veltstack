export interface Service {
  id: string
  slug: string
  title_tr: string
  title_en: string
  description_tr: string
  description_en: string
  content_tr: string
  content_en: string
  iconName: string
  displayOrder: number
  deliveryTime: string | null
  features: unknown
  faqItems: unknown
  metaTitle_tr: string | null
  metaTitle_en: string | null
  metaDesc_tr: string | null
  metaDesc_en: string | null
}
