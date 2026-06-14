import type { LucideIcon } from "lucide-react";
import { Eye, LifeBuoy, Palette, Target, UserRound, Zap } from "lucide-react";

export interface WhyMeItemConfig {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
}

export const whyMeItems: WhyMeItemConfig[] = [
  {
    titleKey: "whyMeSingleTitle",
    descKey: "whyMeSingleDesc",
    icon: UserRound,
  },
  {
    titleKey: "whyMeFastTitle",
    descKey: "whyMeFastDesc",
    icon: Zap,
  },
  {
    titleKey: "whyMeSupportTitle",
    descKey: "whyMeSupportDesc",
    icon: LifeBuoy,
  },
  {
    titleKey: "whyMeTransparentTitle",
    descKey: "whyMeTransparentDesc",
    icon: Eye,
  },
  {
    titleKey: "whyMeMeasurableTitle",
    descKey: "whyMeMeasurableDesc",
    icon: Target,
  },
  {
    titleKey: "whyMeUxTitle",
    descKey: "whyMeUxDesc",
    icon: Palette,
  },
];
