import { getTranslations } from "next-intl/server";
import { ProcessCarousel } from "./ProcessCarousel";

interface ProcessItem {
  title: string;
  description: string;
}

interface ProcessSliderProps {
  className?: string;
}

export async function ProcessSlider({ className }: ProcessSliderProps) {
  const t = await getTranslations("home");
  const steps = t.raw("processItems") as ProcessItem[];

  const items = steps.map((step, index) => ({
    id: `process-step-${index}`,
    title: step.title,
    description: step.description,
    index: index + 1,
  }));

  return (
    <ProcessCarousel
      className={className}
      items={items}
      labels={{
        prev: t("processSliderPrev"),
        next: t("processSliderNext"),
        dot: t("processSliderDot"),
      }}
    />
  );
}
