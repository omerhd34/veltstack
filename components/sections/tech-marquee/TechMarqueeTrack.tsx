import { TechMarqueeItem } from "./TechMarqueeItem";
import { techItems } from "./tech-items";

interface TechMarqueeTrackProps {
  className?: string;
}

export function TechMarqueeTrack({ className }: TechMarqueeTrackProps) {
  const loopItems = [...techItems, ...techItems];

  return (
    <div className={`group/track relative overflow-hidden ${className ?? ""}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-[#00D4AA] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-[#00D4AA] to-transparent" />
      <div className="flex w-max animate-marquee-scroll py-5 group-hover/track:paused">
        {loopItems.map((item, index) => (
          <TechMarqueeItem
            key={`${item.name}-${index}`}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
