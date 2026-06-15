"use client";

import { useState } from "react";
import {
  categoryIcons,
  categoryPackageSlugs,
  type PackageCategory,
} from "./packages-config";
import { ServicesCategoryTabs } from "./ServicesCategoryTabs";
import { ServicesPackagesIntro } from "./ServicesPackagesIntro";
import { ServicesTechShowcase } from "./ServicesTechShowcase";
import {
  ServicePackageCard,
  type PackageCardData,
} from "./ServicePackageCard";

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
  statRevision: string;
  statPages: string;
  statScreens: string;
  statKeywords: string;
  statEndpoints: string;
  getQuote: string;
  techPrimaryLabel: string;
  techSecondaryLabel: string;
}

interface CategoryPackages {
  web: Record<string, PackageCardData>;
  app: Record<string, PackageCardData>;
  seo: Record<string, PackageCardData>;
  api: Record<string, PackageCardData>;
}

interface CategoryIntros {
  web: PackagesIntro;
  app: PackagesIntro;
  seo: PackagesIntro;
  api: PackagesIntro;
}

interface ServicesPackagesPanelProps {
  labels: PackagesPanelLabels;
  intros: CategoryIntros;
  packages: CategoryPackages;
  className?: string;
}

const scopeLabelKey: Record<PackageCategory, keyof PackagesPanelLabels> = {
  web: "statPages",
  app: "statScreens",
  seo: "statKeywords",
  api: "statEndpoints",
};

export function ServicesPackagesPanel({
  labels,
  intros,
  packages,
  className,
}: ServicesPackagesPanelProps) {
  const [category, setCategory] = useState<PackageCategory>("web");

  const intro = intros[category];
  const categoryPackages = packages[category];
  const slugs = categoryPackageSlugs[category];
  const icons = categoryIcons[category];
  const scopeKey = scopeLabelKey[category];

  const cardLabels = {
    tierTemel: labels.tierTemel,
    tierStandart: labels.tierStandart,
    tierPro: labels.tierPro,
    statDelivery: labels.statDelivery,
    statRevision: labels.statRevision,
    statScope: labels[scopeKey] as string,
    getQuote: labels.getQuote,
  };

  return (
    <div className={className}>
      <ServicesCategoryTabs
        tabs={labels.tabs}
        active={category}
        onChange={setCategory}
        className="mx-auto max-w-4xl"
      />

      <ServicesPackagesIntro
        className="mt-12 md:mt-14"
        title={intro.title}
        p1={intro.p1}
        p2={intro.p2}
      />

      <ServicesTechShowcase
        className="mx-auto mt-10 w-full max-w-7xl px-2"
        category={category}
        primaryLabel={labels.techPrimaryLabel}
        secondaryLabel={labels.techSecondaryLabel}
      />

      <div
        key={category}
        className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-5 xl:gap-6"
      >
        {slugs.map((slug) => (
          <ServicePackageCard
            key={`${category}-${slug}`}
            icon={icons[slug]}
            data={categoryPackages[slug]}
            labels={cardLabels}
          />
        ))}
      </div>
    </div>
  );
}
