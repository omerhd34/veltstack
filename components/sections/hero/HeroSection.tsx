import { getTranslations } from "next-intl/server"
import { SiteContainer } from "@/components/layout/SiteContainer"
import { HeroVideo } from "./HeroVideo"
import { HeroContent } from "./HeroContent"
import { HeroCTA } from "./HeroCTA"

interface HeroSectionProps {
  className?: string
}

export async function HeroSection({ className }: HeroSectionProps) {
  const t = await getTranslations("home")

  return (
    <section
      className={`relative flex min-h-[calc(100dvh-4rem)] items-center overflow-x-hidden bg-[#0A0A0F] text-white ${className ?? ""}`}
    >
      <SiteContainer className="flex w-full flex-col gap-10 py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-16">
        <div className="flex w-full min-w-0 flex-1 flex-col gap-6 lg:max-w-xl lg:gap-8">
          <HeroContent title={t("heroTitle")} subtitle={t("heroSubtitle")} />
          <HeroCTA primary={t("ctaPrimary")} secondary={t("ctaSecondary")} />
        </div>
        <HeroVideo className="mx-auto w-full max-w-[min(100%,640px)] shrink-0 lg:mx-0 lg:max-w-[min(58%,640px)]" />
      </SiteContainer>
    </section>
  )
}
