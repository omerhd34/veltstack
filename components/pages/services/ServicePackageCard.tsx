"use client";

import { useState } from "react";
import type { IconType } from "react-icons";
import { LuArrowRight, LuCircleCheck } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import type { PackageTier } from "./packages-config";
import { cn } from "@/lib/utils";

export interface PackageTierData {
  deliveryDays: string;
  revisions: string;
  scope: string;
  features: string[];
}

export interface PackageCardData {
  title: string;
  description: string;
  tiers: Record<PackageTier, PackageTierData>;
}

interface PackageCardLabels {
  tierTemel: string;
  tierStandart: string;
  tierPro: string;
  statDelivery: string;
  statRevision: string;
  statScope: string;
  getQuote: string;
}

interface ServicePackageCardProps {
  icon: IconType;
  data: PackageCardData;
  labels: PackageCardLabels;
  className?: string;
}

const tierOrder: PackageTier[] = ["temel", "standart", "pro"];

const tierLabels: Record<PackageTier, keyof PackageCardLabels> = {
  temel: "tierTemel",
  standart: "tierStandart",
  pro: "tierPro",
};

export function ServicePackageCard({
  icon: Icon,
  data,
  labels,
  className,
}: ServicePackageCardProps) {
  const [activeTier, setActiveTier] = useState<PackageTier>("standart");
  const tier = data.tiers[activeTier];
  const isPro = activeTier === "pro";

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-[#0b1812] text-white transition-all duration-500",
        isPro
          ? "border-brand-accent/40 shadow-[0_0_48px_rgb(58_107_82/0.12)]"
          : "border-emerald-900/45 hover:border-emerald-700/50 hover:shadow-[0_8px_40px_rgb(0_0_0/0.35)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-brand-accent/6 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative border-b border-emerald-900/35 p-6">
        <div className="flex items-start gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent shadow-[0_4px_20px_rgb(58_107_82/0.35)]">
            <Icon className="size-5 text-white" strokeWidth={1.75} />
          </span>
          <div className="min-w-0">
            <h3 className="font-(family-name:--font-heading) text-lg font-bold leading-snug tracking-tight">
              {data.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-emerald-50/55">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-emerald-900/35 px-4 py-4">
        <div className="flex rounded-xl border border-emerald-900/50 bg-[#071510]/80 p-1">
          {tierOrder.map((tierKey) => (
            <button
              key={tierKey}
              type="button"
              onClick={() => setActiveTier(tierKey)}
              className={cn(
                "flex-1 rounded-lg px-2 py-2 text-center text-xs font-semibold transition-all duration-300",
                activeTier === tierKey
                  ? "bg-brand-accent text-white shadow-sm"
                  : "text-emerald-200/55 hover:text-emerald-100",
              )}
            >
              {labels[tierLabels[tierKey]]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 border-b border-emerald-900/35 px-4 py-5">
        {[
          { label: labels.statDelivery, value: tier.deliveryDays },
          { label: labels.statRevision, value: tier.revisions },
          { label: labels.statScope, value: tier.scope },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-emerald-900/40 bg-[#071510]/60 px-2 py-3 text-center"
          >
            <p className="text-[0.6rem] font-bold uppercase tracking-wider text-emerald-400/55">
              {stat.label}
            </p>
            <p className="mt-1.5 font-(family-name:--font-heading) text-lg font-bold text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <ul className="relative flex flex-1 flex-col gap-2.5 px-5 py-5">
        {tier.features.map((feature) => (
          <li
            key={`${activeTier}-${feature}`}
            className="flex items-start gap-2.5 text-[0.8125rem] leading-snug text-emerald-50/80"
          >
            <LuCircleCheck
              className="mt-0.5 size-3.5 shrink-0 text-brand-accent"
              strokeWidth={2.5}
              aria-hidden
            />
            {feature}
          </li>
        ))}
      </ul>

      <div className="p-5 pt-0">
        <Link
          href="/iletisim"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-brand-accent to-emerald-500 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_4px_24px_rgb(58_107_82/0.4)]"
        >
          {labels.getQuote}
          <LuArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
