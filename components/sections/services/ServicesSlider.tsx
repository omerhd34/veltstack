import { getTranslations } from "next-intl/server";
import { ServicesCarousel } from "./ServicesCarousel";
import { ServiceCard } from "./ServiceCard";
import { serviceItems } from "./service-items";

interface ServicesSliderProps {
  className?: string;
}

export async function ServicesSlider({ className }: ServicesSliderProps) {
  const t = await getTranslations("home");

  const services = serviceItems.map((item, index) => ({
    slug: item.slug,
    href: item.href,
    title: t(item.titleKey),
    description: t(item.descKey),
    tag: t(item.tagKey),
    index: index + 1,
  }));

  return (
    <div className={className}>
      <div className="hidden lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-5">
        {services.map((service) => (
          <ServiceCard
            key={service.href}
            variant="slide"
            numbered
            index={service.index}
            slug={service.slug}
            href={service.href}
            title={service.title}
            description={service.description}
            tag={service.tag}
          />
        ))}
      </div>

      <ServicesCarousel
        className="lg:hidden"
        services={services}
        labels={{
          prev: t("servicesSliderPrev"),
          next: t("servicesSliderNext"),
          dot: t("servicesSliderDot"),
        }}
      />
    </div>
  );
}
