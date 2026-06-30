"use client";

import { useMemo } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import BeamCircle from "@/components/lightswind/beam-circle";
import { useIsMobile } from "@/components/hooks/use-mobile";
import { getTechCategoriesForOrbit, type TechCategoryKey } from "./tech-items";
import { buildTechOrbitItems } from "./build-tech-orbit-items";

interface TechBeamCircleProps {
  className?: string;
}

const categoryMessageKeys: Record<TechCategoryKey, string> = {
  frontend: "techCategoryFrontend",
  backend: "techCategoryBackend",
  mobile: "techCategoryMobile",
  hosting: "techCategoryHosting",
  seo: "techCategorySeo",
};

export function TechBeamCircle({ className }: TechBeamCircleProps) {
  const t = useTranslations("home");
  const isMobile = useIsMobile();
  const iconSize = isMobile ? 26 : 32;
  const circleSize = isMobile ? 360 : 540;
  const centerLogoSize = isMobile ? 26 : 34;

  const orbits = useMemo(() => {
    const categories = getTechCategoriesForOrbit();
    const baseOrbits = buildTechOrbitItems(iconSize);

    return baseOrbits.map((orbit, index) => ({
      ...orbit,
      label: t(categoryMessageKeys[categories[index]!.key]),
    }));
  }, [iconSize, t]);

  return (
    <BeamCircle
      className={className}
      size={circleSize}
      orbits={orbits}
      centerIcon={
        <Image
          src="/images/favicons/favicon-512.png"
          alt=""
          width={centerLogoSize}
          height={centerLogoSize}
          className="object-contain"
          aria-hidden
        />
      }
    />
  );
}
