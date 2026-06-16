"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { categoryTabIcons, type PackageCategory } from "./packages-config";

interface TabItem {
  id: PackageCategory;
  label: string;
}

interface ServicesCategoryTabsProps {
  tabs: TabItem[];
  active: PackageCategory;
  onChange: (category: PackageCategory) => void;
  className?: string;
}

interface IndicatorStyle {
  left: number;
  width: number;
}

export function ServicesCategoryTabs({
  tabs,
  active,
  onChange,
  className,
}: ServicesCategoryTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<PackageCategory, HTMLButtonElement>>(new Map());
  const [indicator, setIndicator] = useState<IndicatorStyle>({ left: 0, width: 0 });

  const updateIndicator = useCallback(() => {
    const container = containerRef.current;
    const activeTab = tabRefs.current.get(active);

    if (!container || !activeTab) return;

    const containerRect = container.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();

    setIndicator({
      left: tabRect.left - containerRect.left + container.scrollLeft,
      width: tabRect.width,
    });
  }, [active]);

  useLayoutEffect(() => {
    updateIndicator();

    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(updateIndicator);
    observer.observe(container);
    tabs.forEach((tab) => {
      const el = tabRefs.current.get(tab.id);
      if (el) observer.observe(el);
    });

    window.addEventListener("resize", updateIndicator);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [tabs, updateIndicator]);

  return (
    <div
      className={cn(
        "relative rounded-[1.75rem] p-px shadow-[0_8px_40px_rgb(0_0_0/0.35)]",
        "bg-linear-to-r from-emerald-500/25 via-brand-accent/20 to-emerald-600/25",
        className,
      )}
    >
      <div
        ref={containerRef}
        className="relative overflow-x-auto rounded-[calc(1.75rem-1px)] bg-[#071510]/95 p-1.5 backdrop-blur-md [-ms-overflow-style:none] scrollbar-none lg:overflow-visible [&::-webkit-scrollbar]:hidden"
        role="tablist"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[calc(1.75rem-1px)] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgb(58_107_82/0.12),transparent)]"
        />

        <span
          aria-hidden
          className="absolute top-1.5 bottom-1.5 rounded-full bg-linear-to-r from-brand-accent to-emerald-500 shadow-[0_4px_28px_rgb(58_107_82/0.5)] transition-[left,width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            left: indicator.left,
            width: indicator.width,
          }}
        />

        <div className="relative flex min-w-max items-center gap-1">
          {tabs.map((tab) => {
            const Icon = categoryTabIcons[tab.id];
            const isActive = active === tab.id;

            return (
              <button
                key={tab.id}
                ref={(el) => {
                  if (el) tabRefs.current.set(tab.id, el);
                  else tabRefs.current.delete(tab.id);
                }}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(tab.id)}
                className={cn(
                  "group relative z-10 flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition-colors duration-300 sm:px-5 sm:text-sm",
                  isActive
                    ? "text-white"
                    : "text-emerald-200/55 hover:text-emerald-100/90",
                )}
              >
                <Icon
                  className={cn(
                    "size-3.5 shrink-0 transition-all duration-300 sm:size-4",
                    isActive
                      ? "text-white"
                      : "text-emerald-400/45 group-hover:text-emerald-300/70",
                  )}
                  strokeWidth={isActive ? 2.25 : 1.75}
                  aria-hidden
                />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
