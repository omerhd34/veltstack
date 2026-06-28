import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";

interface UiTextIconOptions {
  label: string;
  fontSize?: number;
  y?: number;
}

export function createUiTextIcon({
  label,
  fontSize = 7.5,
  y = 16,
}: UiTextIconOptions): IconType {
  return function UiTextIcon({ className }: { className?: string }) {
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
          y={y}
          textAnchor="middle"
          fontSize={fontSize}
          fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          {label}
        </text>
      </svg>
    );
  };
}
