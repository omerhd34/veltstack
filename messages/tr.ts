import { navTr } from "@/components/layout/navbar/messages/tr";
import { footerTr } from "@/components/layout/footer/messages/tr";
import { heroHomeTr } from "@/components/sections/hero/messages/tr";
import { servicesHomeTr } from "@/components/sections/services/messages/tr";
import { servicesMarqueeHomeTr } from "@/components/sections/services-marquee/messages/tr";
import { whoWeAreHomeTr } from "@/components/sections/who-we-are/messages/tr";
import { whyMeHomeTr } from "@/components/sections/why-me/messages/tr";
import { processHomeTr } from "@/components/sections/process/messages/tr";
import { projectsHomeTr } from "@/components/sections/projects/messages/tr";
import { testimonialsHomeTr } from "@/components/sections/testimonials/messages/tr";
import { blogPreviewHomeTr } from "@/components/sections/blog-preview/messages/tr";
import { ctaHomeTr } from "@/components/sections/cta/messages/tr";
import { clientLogosHomeTr } from "@/components/sections/client-logos/messages/tr";
import { projectDetailsTr } from "@/components/pages/project-detail/messages/tr";
import { serviceDetailsTr } from "@/components/pages/service-detail/messages/tr";
import { servicesPageTr } from "@/components/pages/services/messages/tr";
import { projectsPageTr } from "@/components/pages/projects/messages/tr";
import { pagesTr } from "@/app/[locale]/messages/pages/tr";
import { contactTr } from "@/app/[locale]/iletisim/messages/tr";
import { aboutTr } from "@/app/[locale]/hakkimda/messages/tr";
import { blogPageTr } from "@/components/pages/blog/messages/tr";

const messages = {
  nav: navTr,
  footer: footerTr,
  home: {
    ...heroHomeTr,
    ...servicesHomeTr,
    ...servicesMarqueeHomeTr,
    ...whoWeAreHomeTr,
    ...whyMeHomeTr,
    ...processHomeTr,
    ...projectsHomeTr,
    ...testimonialsHomeTr,
    ...blogPreviewHomeTr,
    ...ctaHomeTr,
    ...clientLogosHomeTr,
  },
  pages: pagesTr,
  projectDetails: projectDetailsTr,
  serviceDetails: serviceDetailsTr,
  servicesPage: servicesPageTr,
  projectsPage: projectsPageTr,
  contact: contactTr,
  about: aboutTr,
  blogPage: blogPageTr,
} as const;

export default messages;
