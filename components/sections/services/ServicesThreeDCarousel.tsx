"use client";

import { useTranslations } from "next-intl";
import ThreeDCarousel from "@/components/lightswind/3d-carousel";
import { ServiceCard } from "./ServiceCard";
import type { ServiceSlideItem } from "./ServicesCarousel";

interface ServicesThreeDCarouselProps {
  services: ServiceSlideItem[];
  className?: string;
}

export function ServicesThreeDCarousel({
  services,
  className,
}: ServicesThreeDCarouselProps) {
  const t = useTranslations("home");

  const items = services.map((service) => ({
    ...service,
    id: service.slug,
  }));

  return (
    <ThreeDCarousel
      className={className}
      items={items}
      rotateInterval={15000}
      getSlideLabel={(service) => service.title}
      formatSlideAnnouncement={(label, current, total) =>
        t("servicesSliderStatus", { label, current, total })
      }
      formatActivateLabel={(title) => t("servicesSliderActivate", { title })}
      labels={{
        prev: t("servicesSliderPrev"),
        next: t("servicesSliderNext"),
        dot: t("servicesSliderDot"),
        region: t("servicesSliderRegion"),
      }}
      renderItem={(service, _index, { isActive, onActivate, activateLabel }) => (
        <ServiceCard
          variant="slide"
          numbered
          isActive={isActive}
          onActivate={onActivate}
          activateLabel={activateLabel}
          index={service.index}
          slug={service.slug}
          href={service.href}
          title={service.title}
          description={service.description}
          tag={service.tag}
        />
      )}
    />
  );
}
