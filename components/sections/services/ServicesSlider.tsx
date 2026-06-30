import { getTranslations } from "next-intl/server";
import { ServicesThreeDCarousel } from "./ServicesThreeDCarousel";
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

  return <ServicesThreeDCarousel className={className} services={services} />;
}
