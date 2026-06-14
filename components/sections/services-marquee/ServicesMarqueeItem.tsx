import { FaCode } from "react-icons/fa";

interface ServicesMarqueeItemProps {
  label: string;
}

export function ServicesMarqueeItem({ label }: ServicesMarqueeItemProps) {
  return (
    <div className="flex shrink-0 items-center gap-2 px-6">
      <FaCode aria-hidden className="size-3.5 shrink-0 md:size-4" />
      <span className="font-(family-name:--font-heading) text-lg font-bold tracking-wide md:text-xl">
        {label}
      </span>
    </div>
  );
}
