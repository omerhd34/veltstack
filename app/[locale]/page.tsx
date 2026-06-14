import { setRequestLocale } from "next-intl/server"
import { HeroSection } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { ServicesMarqueeSection } from "@/components/sections/services-marquee"
import { WhoWeAreSection } from "@/components/sections/who-we-are"
import { WhyMeSection } from "@/components/sections/why-me"
import { ProcessSection } from "@/components/sections/process"
import { ProjectsSection } from "@/components/sections/projects"
import { TechMarqueeSection } from "@/components/sections/tech-marquee"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { BlogPreviewSection } from "@/components/sections/blog-preview"
import { CTASection } from "@/components/sections/cta"

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export const revalidate = 3600

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <HeroSection />
      <ServicesMarqueeSection />
      <WhoWeAreSection />
      <ServicesSection />
      <WhyMeSection />
      <ProcessSection />
      <ProjectsSection />
      <TechMarqueeSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  )
}
