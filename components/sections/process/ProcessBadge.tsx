import { Badge } from "@/components/ui/shadcn";

interface ProcessBadgeProps {
  label: string;
}

export function ProcessBadge({ label }: ProcessBadgeProps) {
  return (
    <Badge
      variant="outline"
      className="border-brand-accent/40 bg-brand-accent/10 px-4 py-1.5 text-sm font-medium text-[#0A0A0F]"
    >
      <span className="size-2 shrink-0 rounded-full bg-brand-accent" />
      {label}
    </Badge>
  );
}
