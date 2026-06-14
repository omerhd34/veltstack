import { getTranslations } from "next-intl/server"
import { CTAContent } from "./CTAContent"
import { CTAButton } from "./CTAButton"

interface CTASectionProps {
  className?: string
}

export async function CTASection({ className }: CTASectionProps) {
  const t = await getTranslations("home")

  return (
    <section
      className={`relative overflow-hidden bg-[#0A0A0F] px-4 py-24 ${className ?? ""}`}
    >
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8">
        <CTAContent title={t("ctaTitle")} subtitle={t("ctaSubtitle")} />
        <CTAButton label={t("ctaButton")} href="/iletisim" />
      </div>
    </section>
  )
}
