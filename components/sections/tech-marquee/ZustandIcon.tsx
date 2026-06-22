import { cn } from "@/lib/utils";

interface ZustandIconProps {
  className?: string;
}

const ZUSTAND_ICON_SRC = "/icons/tech/zustand.svg";

export function ZustandIcon({ className }: ZustandIconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block size-full shrink-0", className)}
      aria-hidden
    >
      <rect
        width="128"
        height="128"
        fill="currentColor"
        style={{
          mask: `url(${ZUSTAND_ICON_SRC}) no-repeat center / contain`,
          WebkitMask: `url(${ZUSTAND_ICON_SRC}) no-repeat center / contain`,
        }}
      />
    </svg>
  );
}
