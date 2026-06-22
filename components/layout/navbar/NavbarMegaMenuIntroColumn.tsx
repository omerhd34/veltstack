import type { ReactNode } from "react";

interface NavbarMegaMenuIntroColumnProps {
  headline: string;
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
    introLines === 11
      ? " h-[calc(0.875rem*1.625*11)] md:h-[calc(1rem*1.625*11)]"
      : introLines === 9
        ? " h-[calc(0.875rem*1.625*9)] md:h-[calc(1rem*1.625*9)]"
        : introLines === 7
          ? " h-[calc(0.875rem*1.625*7)] md:h-[calc(1rem*1.625*7)]"
          : "";

  return (
    <div className="flex max-w-md flex-col">
      <div className="mega-menu-intro flex-1">
        <h2 className="font-(family-name:--font-heading) text-xl font-bold leading-tight tracking-tight md:text-2xl">
          {headline}
        </h2>
        <p
          className={`mt-4 text-sm leading-relaxed text-muted-foreground md:text-base${introHeightClass}`}
        >
          {intro}
        </p>
      </div>
      <div className="mt-6 shrink-0">{children}</div>
    </div>
  );
}
