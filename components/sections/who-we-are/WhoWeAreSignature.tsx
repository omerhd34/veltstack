"use client";

import Image from "next/image";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { cn } from "@/lib/utils";

interface WhoWeAreSignatureProps {
  name: string;
  role: string;
  className?: string;
}

export function WhoWeAreSignature({
  name,
  role,
  className,
}: WhoWeAreSignatureProps) {
  return (
    <div
      className={cn(
        "group inline-flex cursor-default items-center gap-4",
        className,
      )}
    >
      <div
        className={cn(
          "relative size-12 shrink-0 rounded-full",
          "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent",
          "ring-2 ring-brand-accent/15",
        )}
      >
        <BorderTrace durationSec={2.5} radius={24} />
        <div className="relative size-full overflow-hidden rounded-full">
          <Image
            src="/images/img.jpg"
            alt={name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="min-w-0 text-left">
        <p className="font-(family-name:--font-heading) text-base font-bold text-[#0A0A0F]">
          {name}
        </p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}
