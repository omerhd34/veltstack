import { getTranslations } from "next-intl/server";
import { WhyMeCard } from "./WhyMeCard";
import { whyMeItems } from "./why-me-items";

interface WhyMeGridProps {
  className?: string;
}

export async function WhyMeGrid({ className }: WhyMeGridProps) {
  const t = await getTranslations("home");

  return (
    <div
      className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${className ?? ""}`}
    >
      {whyMeItems.map((item, index) => (
        <WhyMeCard
          key={item.titleKey}
          index={index + 1}
          icon={item.icon}
          title={t(item.titleKey)}
          description={t(item.descKey)}
        />
      ))}
    </div>
  );
}
