import type { PackageTier } from "./packages-config";
import type { PackageCardData } from "./ServicePackageCard";

export const compactAccordionQuery = "(max-width: 1023px)";
export const desktopGridQuery = "(min-width: 1024px)";
export const packageAccordionDurationMs = 500;

export function collectFeatureGroupLabels(
  packages: PackageCardData[],
  tier: PackageTier,
): string[] {
  const labels: string[] = [];

  for (const pkg of packages) {
    for (const group of pkg.tiers[tier].featureGroups ?? []) {
      if (!labels.includes(group.label)) {
        labels.push(group.label);
      }
    }
  }

  return labels;
}

export function getDefaultOpenGroups(
  packages: PackageCardData[],
  tier: PackageTier,
  isCompact: boolean,
) {
  const labels = collectFeatureGroupLabels(packages, tier);
  if (isCompact || !labels.length) {
    return new Set<string>();
  }
  return new Set(labels);
}
