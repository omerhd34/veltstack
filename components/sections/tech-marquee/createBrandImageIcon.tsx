import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";

export function createBrandImageIcon(src: string): IconType {
  function BrandImageIcon({ className }: { className?: string }) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt=""
        aria-hidden
        className={cn("block size-full object-contain", className)}
      />
    );
  }

  return BrandImageIcon;
}
