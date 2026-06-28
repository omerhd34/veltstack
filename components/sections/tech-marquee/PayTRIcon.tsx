import { cn } from "@/lib/utils";

interface PayTRIconProps {
  className?: string;
}

export function PayTRIcon({ className }: PayTRIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block shrink-0", className)}
      aria-hidden
    >
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        PayTR
      </text>
    </svg>
  );
}
