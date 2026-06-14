import { getTranslations } from "next-intl/server"
import { ServiceCard } from "./ServiceCard"
import { serviceItems } from "./service-items"

interface ServicesGridProps {
  className?: string
}

export async function ServicesGrid({ className }: ServicesGridProps) {
  const t = await getTranslations("home")

  return (
    <div
      className={`grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 ${className ?? ""}`}
    >
      {serviceItems.map((service, index) => (
        <ServiceCard
          key={service.href}
          numbered
          index={index + 1}
          href={service.href}
          title={t(service.titleKey)}
          description={t(service.descKey)}
          tag={t(service.tagKey)}
          icon={service.icon}
        />
      ))}
    </div>
  )
}
