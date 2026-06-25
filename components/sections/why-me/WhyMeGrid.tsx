import { getTranslations } from "next-intl/server";
import { WhyMeCard } from "./WhyMeCard";
import { WhyMeFlowGrid } from "./WhyMeFlowGrid";
import { whyMeItems } from "./why-me-items";

interface WhyMeGridProps {
  className?: string;
}

export async function WhyMeGrid({ className }: WhyMeGridProps) {
  const t = await getTranslations("home");

  const items = whyMeItems.map((item, index) => ({
    titleKey: item.titleKey,
    index: index + 1,
    title: t(item.titleKey),
    description: t(item.descKey),
  }));

  return (
    <div className={className}>
      <div className="grid gap-5 sm:grid-cols-2 lg:hidden">
        {items.map((item) => {
          const config = whyMeItems.find((i) => i.titleKey === item.titleKey);
          if (!config) return null;

          return (
            <WhyMeCard
              key={item.titleKey}
              index={item.index}
              icon={config.icon}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>

      <WhyMeFlowGrid items={items} />
    </div>
  );
}
