import { cn } from "@/lib/utils";
import { ServicesTechGroup } from "./ServicesTechGroup";
import {
  categoryPrimaryTechStack,
  getCategorySecondaryTechStack,
  type PackageCategory,
} from "./packages-config";

interface ServicesTechShowcaseProps {
  category: PackageCategory;
  primaryLabel: string;
  secondaryLabel: string;
  className?: string;
}

export function ServicesTechShowcase({
  category,
  primaryLabel,
  secondaryLabel,
  className,
}: ServicesTechShowcaseProps) {
  const primary = [...categoryPrimaryTechStack[category]];
  const secondary = getCategorySecondaryTechStack(category);

  return (
    <div
      className={cn(
        "flex w-full flex-col items-stretch gap-6 overflow-x-auto scrollbar-none sm:overflow-visible sm:flex-row sm:items-start sm:justify-center sm:gap-8",
        className,
      )}
    >
      <ServicesTechGroup label={primaryLabel} names={primary} />

      {secondary.length > 0 ? (
        <>
          <div
            aria-hidden
            className="hidden w-px shrink-0 self-stretch bg-linear-to-b from-transparent via-emerald-600/40 to-transparent sm:block"
          />
          <div
            aria-hidden
            className="h-px w-full bg-linear-to-r from-transparent via-emerald-600/35 to-transparent sm:hidden"
          />
          <ServicesTechGroup label={secondaryLabel} names={secondary} />
        </>
      ) : null}
    </div>
  );
}
