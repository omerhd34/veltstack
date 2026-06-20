export interface BlogPost {
  slug: string;
  titleTr: string;
  titleEn: string;
  excerptTr: string;
  excerptEn: string;
  category: string;
  categoryEn: string;
  imageUrl: string;
  readingTime: number;
  publishedAt: string;
  featured?: boolean;
}

export interface BlogPostContent {
  tr: string;
  en: string;
}

export interface BlogPostEntry extends BlogPost {
  content?: BlogPostContent;
}
