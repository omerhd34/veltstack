import { cn } from "@/lib/utils";

const HERO_SOURCES = {
  ultrawide: "/images/hero/ultrawide.png",
  wide: "/images/hero/wide.png",
  desktop: "/images/hero/desktop.png",
  laptop: "/images/hero/laptop.png",
  tabletLandscape: "/images/hero/tablet-landscape.png",
  tabletPortrait: "/images/hero/tablet-portrait.png",
  mobileMd: "/images/hero/mobile-md.png",
  mobileSm: "/images/hero/mobile-sm.png",
} as const;

interface HeroImageProps {
  alt?: string;
  className?: string;
}

export function HeroImage({ alt = "", className }: HeroImageProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden bg-[#0A0A0F]",
        className,
      )}
      aria-hidden={alt === ""}
    >
      <picture className="absolute inset-0 block h-full w-full">
        <source
          media="(min-width: 2560px) and (min-aspect-ratio: 21/9)"
          srcSet={HERO_SOURCES.wide}
        />
        <source media="(min-width: 1536px)" srcSet={HERO_SOURCES.desktop} />
        <source media="(min-width: 1280px)" srcSet={HERO_SOURCES.laptop} />
        <source
          media="(min-width: 768px)"
          srcSet={HERO_SOURCES.tabletLandscape}
        />
        <source
          media="(min-width: 640px)"
          srcSet={HERO_SOURCES.tabletPortrait}
        />
        <source media="(min-width: 480px)" srcSet={HERO_SOURCES.mobileMd} />
        <img
          src={HERO_SOURCES.mobileSm}
          alt={alt}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center max-sm:object-[center_38%] md:object-[62%_32%]"
        />
      </picture>
      <div
        className="absolute inset-0 bg-[#0A0A0F]/30 max-sm:bg-[#0A0A0F]/40 md:max-lg:bg-[#0A0A0F]/35"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgb(10_10_15/0.82)_0%,rgb(10_10_15/0.45)_42%,transparent_68%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_28%_42%,rgb(10_10_15/0.55),transparent_72%)] max-md:bg-[radial-gradient(ellipse_85%_58%_at_22%_40%,rgb(10_10_15/0.65),transparent_78%)]"
        aria-hidden
      />
    </div>
  );
}
