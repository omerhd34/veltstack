import { getTranslations } from "next-intl/server";
import { ServicesCarousel } from "./ServicesCarousel";
import { serviceItems } from "./service-items";

interface ServicesSliderProps {
  className?: string;
}

export async function ServicesSlider({ className }: ServicesSliderProps) {
  const t = await getTranslations("home");

  const services = serviceItems.map((item, index) => ({
    href: item.href,
    title: t(item.titleKey),
    description: t(item.descKey),
    tag: t(item.tagKey),
    index: index + 1,
  }));

  return (
    <ServicesCarousel
      className={className}
      services={services}
      labels={{
        prev: t("servicesSliderPrev"),
        next: t("servicesSliderNext"),
        dot: t("servicesSliderDot"),
      }}
    />
  );
}
