import { LuEye } from "react-icons/lu";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";
import { cn } from "@/lib/utils";

interface BlogPreviewMoreButtonProps {
  label: string;
  className?: string;
}

export function BlogPreviewMoreButton({
  label,
  className,
}: BlogPreviewMoreButtonProps) {
  return (
    <PrimaryCtaLink
      href="/blog"
      className={cn(className)}
      showArrow={false}
      leadingIcon={<LuEye className="size-5" aria-hidden />}
    >
      {label}
    </PrimaryCtaLink>
  );
}
