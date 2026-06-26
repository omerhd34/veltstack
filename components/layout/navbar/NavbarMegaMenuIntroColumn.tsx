import type { ReactNode } from "react";

interface NavbarMegaMenuIntroColumnProps {
  headline: ReactNode;
  intro: string;
  introLines?: number;
  children: ReactNode;
}

export function NavbarMegaMenuIntroColumn({
  headline,
  intro,
  introLines,
  children,
}: NavbarMegaMenuIntroColumnProps) {
  const introHeightClass =
    introLines === 12
      ? " line-clamp-12 max-h-[calc(0.875rem*1.625*12)] md:max-h-[calc(1rem*1.625*12)]"
      : introLines === 11
      ? " line-clamp-11 max-h-[calc(0.875rem*1.625*11)] md:max-h-[calc(1rem*1.625*11)]"
      : introLines === 9
        ? " line-clamp-9 max-h-[calc(0.875rem*1.625*9)] md:max-h-[calc(1rem*1.625*9)]"
        : introLines === 7
          ? " line-clamp-7 max-h-[calc(0.875rem*1.625*7)] md:max-h-[calc(1rem*1.625*7)]"
          : "";

  return (
    <div className="flex h-full max-w-md flex-col">
      <div className="mega-menu-intro">
        <h2 className="font-(family-name:--font-heading) text-xl font-bold leading-tight tracking-tight md:text-2xl">
          {headline}
        </h2>
        <p
          className={`mt-4 text-sm leading-relaxed text-muted-foreground md:text-base${introHeightClass}`}
        >
          {intro}
        </p>
      </div>
      <div className="mt-auto shrink-0 pt-6">{children}</div>
    </div>
  );
}
