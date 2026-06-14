import type { IconType } from "react-icons";

interface TechMarqueeItemProps {
  name: string;
  icon: IconType;
}

export function TechMarqueeItem({ name, icon: Icon }: TechMarqueeItemProps) {
  return (
    <div
      className="group/item flex shrink-0 items-center px-8"
      aria-label={name}
    >
      <Icon className="size-7 shrink-0" aria-hidden />
      <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap font-(family-name:--font-heading) text-xs font-bold tracking-[0.15em] opacity-0 transition-all duration-500 group-hover/item:ml-2 group-hover/item:max-w-48 group-hover/item:opacity-100">
        {name.toLocaleUpperCase("en-US")}
      </span>
    </div>
  );
}
