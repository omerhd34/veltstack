import { cn } from "@/lib/utils";

interface ShopierIconProps {
  className?: string;
}

export function ShopierIcon({ className }: ShopierIconProps) {
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
        y="17"
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        S
      </text>
    </svg>
  );
}
