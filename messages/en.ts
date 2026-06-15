import { navEn } from "@/components/layout/navbar/messages/en"
import { footerEn } from "@/components/layout/footer/messages/en"
import { heroHomeEn } from "@/components/sections/hero/messages/en"
import { servicesHomeEn } from "@/components/sections/services/messages/en"
import { servicesMarqueeHomeEn } from "@/components/sections/services-marquee/messages/en"
import { whoWeAreHomeEn } from "@/components/sections/who-we-are/messages/en"
import { whyMeHomeEn } from "@/components/sections/why-me/messages/en"
import { processHomeEn } from "@/components/sections/process/messages/en"
import { projectsHomeEn } from "@/components/sections/projects/messages/en"
import { testimonialsHomeEn } from "@/components/sections/testimonials/messages/en"
import { blogPreviewHomeEn } from "@/components/sections/blog-preview/messages/en"
import { ctaHomeEn } from "@/components/sections/cta/messages/en"
import { clientLogosHomeEn } from "@/components/sections/client-logos/messages/en"
import { projectDetailsEn } from "@/components/pages/project-detail/messages/en"
import { serviceDetailsEn } from "@/components/pages/service-detail/messages/en"
import { servicesPageEn } from "@/components/pages/services/messages/en"
import { pagesEn } from "@/app/[locale]/messages/pages/en"
import { contactEn } from "@/app/[locale]/iletisim/messages/en"
import { aboutEn } from "@/app/[locale]/hakkimda/messages/en"

const messages = {
  nav: navEn,
  footer: footerEn,
  home: {
    ...heroHomeEn,
    ...servicesHomeEn,
    ...servicesMarqueeHomeEn,
    ...whoWeAreHomeEn,
    ...whyMeHomeEn,
    ...processHomeEn,
    ...projectsHomeEn,
    ...testimonialsHomeEn,
    ...blogPreviewHomeEn,
    ...ctaHomeEn,
    ...clientLogosHomeEn,
  },
  pages: pagesEn,
  projectDetails: projectDetailsEn,
  serviceDetails: serviceDetailsEn,
  servicesPage: servicesPageEn,
  contact: contactEn,
  about: aboutEn,
} as const

export default messages
