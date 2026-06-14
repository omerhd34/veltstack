import type { ProjectCategory } from "./project";

export interface Testimonial {
  id: string;
  clientName: string;
  companyName: string;
  logoUrl: string | null;
  feedback_tr: string;
  feedback_en: string;
  rating: number;
  category: ProjectCategory;
  isApproved: boolean;
  createdAt: Date;
}
