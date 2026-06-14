import { ServicesMarqueeItem } from "./ServicesMarqueeItem";

interface ServicesMarqueeTrackProps {
  items: string[];
  className?: string;
}

export function ServicesMarqueeTrack({
  items,
  className,
}: ServicesMarqueeTrackProps) {
  const loopItems = [...items, ...items];

  return (
    <div className={`group/track relative overflow-hidden ${className ?? ""}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-brand-accent to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-brand-accent to-transparent" />
      <div className="flex w-max animate-services-marquee py-3 group-hover/track:paused">
        {loopItems.map((item, index) => (
          <ServicesMarqueeItem key={`${item}-${index}`} label={item} />
        ))}
      </div>
    </div>
  );
}
