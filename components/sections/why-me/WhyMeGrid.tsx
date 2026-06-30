import { getTranslations } from "next-intl/server";
import { WhyMeScrollTimeline } from "./WhyMeScrollTimeline";
import { whyMeItems } from "./why-me-items";

interface WhyMeGridProps {
  className?: string;
}

export async function WhyMeGrid({ className }: WhyMeGridProps) {
  const t = await getTranslations("home");

  const items = whyMeItems.map((item, index) => ({
    id: item.titleKey,
    titleKey: item.titleKey,
    year: String(index + 1).padStart(2, "0"),
    title: t(item.titleKey),
    description: t(item.descKey),
  }));

  return <WhyMeScrollTimeline items={items} className={className} />;
}
