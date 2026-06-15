import { TechStackIcons } from "@/components/sections/projects/TechStackIcons";
import { cn } from "@/lib/utils";

interface ServicesTechGroupProps {
  label: string;
  names: string[];
  className?: string;
}

export function ServicesTechGroup({
  label,
  names,
  className,
}: ServicesTechGroupProps) {
  return (
    <div className={cn("flex shrink-0 flex-col items-center gap-3", className)}>
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-emerald-400/50">
        {label}
      </p>
      <TechStackIcons
        names={names}
        size="md"
        variant="dark"
        wrap={false}
        className="justify-center gap-1.5"
      />
    </div>
  );
}
