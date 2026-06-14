import type { IconType } from "react-icons";
import {
  LuEye,
  LuLifeBuoy,
  LuPalette,
  LuTarget,
  LuUserRound,
  LuZap,
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
    icon: LuUserRound,
  },
  {
    titleKey: "whyMeFastTitle",
    descKey: "whyMeFastDesc",
    icon: LuZap,
  },
  {
    titleKey: "whyMeSupportTitle",
    descKey: "whyMeSupportDesc",
    icon: LuLifeBuoy,
  },
  {
    titleKey: "whyMeTransparentTitle",
    descKey: "whyMeTransparentDesc",
    icon: LuEye,
  },
  {
    titleKey: "whyMeMeasurableTitle",
    descKey: "whyMeMeasurableDesc",
    icon: LuTarget,
  },
  {
    titleKey: "whyMeUxTitle",
    descKey: "whyMeUxDesc",
    icon: LuPalette,
  },
];
