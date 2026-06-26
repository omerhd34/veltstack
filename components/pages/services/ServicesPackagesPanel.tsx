"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  categoryIcons,
  categoryPackageSlugs,
  type PackageCategory,
  type PackageTier,
} from "./packages-config";
import {
  compactAccordionQuery,
  getDefaultOpenGroups,
} from "./package-accordion";
import { ServicesCategoryTabs } from "./ServicesCategoryTabs";
import { ServicesPackagesIntro } from "./ServicesPackagesIntro";
import { ServicePackageCard, type PackageCardData } from "./ServicePackageCard";
import { usePackageGroupHeightSync } from "./usePackageGroupHeightSync";

interface PackagesIntro {
  title: string;
  p1: string;
  p2: string;
}

interface PackagesPanelLabels {
  tabs: { id: PackageCategory; label: string }[];
  tierTemel: string;
  tierStandart: string;
  tierPro: string;
  statDelivery: string;
  statDeliverySetup: string;
  statDeliveryStart: string;
  statDeliveryAudit: string;
  statDeliveryUnit: string;
  statRevision: string;
  statPages: string;
  statScreens: string;
  statKeywords: string;
  statProjects: string;
  getQuote: string;
}

interface CategoryPackages {
  web: Record<string, PackageCardData>;
  refresh: Record<string, PackageCardData>;
  app: Record<string, PackageCardData>;
  seo: Record<string, PackageCardData>;
  audit: Record<string, PackageCardData>;
  maintenance: Record<string, PackageCardData>;
}

interface CategoryIntros {
  web: PackagesIntro;
  refresh: PackagesIntro;
  app: PackagesIntro;
  seo: PackagesIntro;
  audit: PackagesIntro;
  maintenance: PackagesIntro;
}

interface ServicesPackagesPanelProps {
  labels: PackagesPanelLabels;
  intros: CategoryIntros;
  packages: CategoryPackages;
  className?: string;
}

const deliveryLabelKey: Record<PackageCategory, keyof PackagesPanelLabels> = {
  web: "statDelivery",
  refresh: "statDelivery",
  app: "statDelivery",
  seo: "statDeliveryStart",
  audit: "statDeliveryAudit",
  maintenance: "statDeliverySetup",
};

const scopeLabelKey: Record<PackageCategory, keyof PackagesPanelLabels> = {
  web: "statPages",
  refresh: "statPages",
  app: "statScreens",
  seo: "statKeywords",
  audit: "statProjects",
  maintenance: "statProjects",
};

const revisionLabelKey: Record<PackageCategory, keyof PackagesPanelLabels> = {
  web: "statRevision",
  refresh: "statRevision",
  app: "statRevision",
  seo: "statPages",
  audit: "statPages",
  maintenance: "statRevision",
};

export function ServicesPackagesPanel({
  labels,
  intros,
  packages,
  className,
}: ServicesPackagesPanelProps) {
  const [category, setCategory] = useState<PackageCategory>("web");
  const [activeTier, setActiveTier] = useState<PackageTier>("standart");
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());
  const gridRef = useRef<HTMLDivElement>(null);

  const intro = intros[category];
  const categoryPackages = packages[category];
  const slugs = categoryPackageSlugs[category];
  const icons = categoryIcons[category];
  const scopeKey = scopeLabelKey[category];
  const revisionKey = revisionLabelKey[category];
  const deliveryKey = deliveryLabelKey[category];

  const visiblePackages = useMemo(
    () => slugs.map((slug) => categoryPackages[slug]),
    [categoryPackages, slugs],
  );

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia(compactAccordionQuery);

    const syncOpenGroups = () => {
      setOpenGroups(
        getDefaultOpenGroups(visiblePackages, activeTier, mediaQuery.matches),
      );
    };

    syncOpenGroups();
    mediaQuery.addEventListener("change", syncOpenGroups);
    return () => mediaQuery.removeEventListener("change", syncOpenGroups);
  }, [activeTier, category, visiblePackages]);

  const openGroupsKey = [...openGroups].sort().join("\0");

  usePackageGroupHeightSync(gridRef, [category, activeTier], openGroupsKey);

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  const cardLabels = {
    tierTemel: labels.tierTemel,
    tierStandart: labels.tierStandart,
    tierPro: labels.tierPro,
    statDelivery: labels[deliveryKey] as string,
    statDeliveryUnit: labels.statDeliveryUnit,
    statRevision: labels[revisionKey] as string,
    statScope: labels[scopeKey] as string,
    getQuote: labels.getQuote,
    hideMiddleStat: category === "audit",
  };

  return (
    <div className={`min-w-0 ${className ?? ""}`}>
      <ServicesCategoryTabs
        tabs={labels.tabs}
        active={category}
        onChange={setCategory}
        className="mx-auto w-fit max-w-full"
      />

      <ServicesPackagesIntro
        className="mt-12 md:mt-14"
        title={intro.title}
        p1={intro.p1}
        p2={intro.p2}
      />

      <div
        ref={gridRef}
        key={category}
        className={`mt-14 grid items-stretch gap-6 lg:gap-5 xl:gap-6 ${
          slugs.length === 1 ? "mx-auto w-full max-w-2xl" : "lg:grid-cols-3"
        }`}
      >
        {slugs.map((slug) => (
          <ServicePackageCard
            key={`${category}-${slug}`}
            icon={icons[slug]}
            data={categoryPackages[slug]}
            labels={cardLabels}
            activeTier={activeTier}
            onTierChange={setActiveTier}
            openGroups={openGroups}
            onToggleGroup={toggleGroup}
          />
        ))}
      </div>
    </div>
  );
}
