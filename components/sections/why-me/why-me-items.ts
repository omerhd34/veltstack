import type { IconType } from "react-icons";
import {
  LuChartLine,
  LuContact,
  LuHeadset,
  LuLayoutTemplate,
  LuListChecks,
  LuRocket,
} from "react-icons/lu";

export interface WhyMeItemConfig {
  titleKey: string;
  descKey: string;
  icon: IconType;
}

export const whyMeItems: WhyMeItemConfig[] = [
  {
    titleKey: "whyMeSingleTitle",
    descKey: "whyMeSingleDesc",
    icon: LuContact,
  },
  {
    titleKey: "whyMeFastTitle",
    descKey: "whyMeFastDesc",
    icon: LuRocket,
  },
  {
    titleKey: "whyMeSupportTitle",
    descKey: "whyMeSupportDesc",
    icon: LuHeadset,
  },
  {
    titleKey: "whyMeUxTitle",
    descKey: "whyMeUxDesc",
    icon: LuLayoutTemplate,
  },
  {
    titleKey: "whyMeMeasurableTitle",
    descKey: "whyMeMeasurableDesc",
    icon: LuChartLine,
  },
  {
    titleKey: "whyMeTransparentTitle",
    descKey: "whyMeTransparentDesc",
    icon: LuListChecks,
  },
];
