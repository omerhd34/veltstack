import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface FooterLogoProps {
  className?: string;
}

export function FooterLogo({ className }: FooterLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex select-none items-center gap-2 transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Image
        src="/images/favicons/favicon-48.png"
        alt=""
        width={28}
        height={28}
        className="h-6 w-6 shrink-0 sm:h-7 sm:w-7"
        aria-hidden
      />
      <span className="font-(family-name:--font-heading) text-lg font-extrabold tracking-[-0.04em] sm:text-xl">
        Velt
        <span className="text-brand-accent">stack</span>
      </span>
    </Link>
  );
}
