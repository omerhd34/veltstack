import Image from "next/image";
import { cn } from "@/lib/utils";

interface NavbarLogoProps {
  className?: string;
}

export function NavbarLogo({ className }: NavbarLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex origin-left select-none items-center gap-2 transition-transform duration-500 ease-out hover:scale-[1.04]",
        className,
      )}
    >
      <Image
        src="/images/favicons/favicon-48.png"
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
        aria-hidden
      />
      <span className="font-(family-name:--font-heading) text-[1.6875rem] font-extrabold tracking-[-0.04em] sm:text-[2.25rem]">
        Velt
        <span className="text-brand-accent">stack</span>
      </span>
    </span>
  );
}
