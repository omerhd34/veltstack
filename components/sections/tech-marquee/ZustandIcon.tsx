import Image from "next/image";
import { cn } from "@/lib/utils";

interface ZustandIconProps {
  className?: string;
}

export function ZustandIcon({ className }: ZustandIconProps) {
  return (
    <Image
      src="/icons/tech/zustand.svg"
      alt=""
      width={16}
      height={16}
      unoptimized
      className={cn("block size-full shrink-0 object-contain", className)}
      aria-hidden
      draggable={false}
    />
  );
}
