import { getTranslations } from "next-intl/server";
import { WhyMeCarousel } from "./WhyMeCarousel";
import { whyMeItems } from "./why-me-items";

interface WhyMeSliderProps {
  className?: string;
}

export async function WhyMeSlider({ className }: WhyMeSliderProps) {
  const t = await getTranslations("home");

  const items = whyMeItems.map((item, index) => ({
    id: item.titleKey,
    title: t(item.titleKey),
    description: t(item.descKey),
    index: index + 1,
  }));

  return (
    <WhyMeCarousel
      className={className}
      items={items}
      labels={{
        prev: t("whyMeSliderPrev"),
        next: t("whyMeSliderNext"),
        dot: t("whyMeSliderDot"),
      }}
    />
  );
}
