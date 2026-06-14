import { getTranslations } from "next-intl/server"
import { ServicesMarqueeTrack } from "./ServicesMarqueeTrack"

interface ServicesMarqueeSectionProps {
  className?: string
}

export async function ServicesMarqueeSection({ className }: ServicesMarqueeSectionProps) {
  const t = await getTranslations("home")
  const items = t.raw("servicesMarqueeItems") as string[]

  return (
    <section
      className={`overflow-hidden bg-brand-accent text-brand-accent-foreground ${className ?? ""}`}
      aria-label={t("servicesTitle")}
    >
      <ServicesMarqueeTrack items={items} />
    </section>
  )
}
