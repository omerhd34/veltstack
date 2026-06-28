import { cn } from "@/lib/utils";

interface IxirhostIconProps {
  className?: string;
}

const IXIRHOST_ICON_SRC = "/images/ixirhost.png";

export function IxirhostIcon({ className }: IxirhostIconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={IXIRHOST_ICON_SRC}
      alt=""
      aria-hidden
      className={cn("block size-full object-contain", className)}
    />
  );
}
