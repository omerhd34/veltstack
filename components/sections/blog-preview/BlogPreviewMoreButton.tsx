import { LuArrowRight } from "react-icons/lu"
import { Link } from "@/i18n/navigation"
import { buttonVariants } from "@/components/ui/shadcn/button"
import { cn } from "@/lib/utils"

interface BlogPreviewMoreButtonProps {
  label: string
}

export function BlogPreviewMoreButton({ label }: BlogPreviewMoreButtonProps) {
  return (
    <Link
      href="/blog"
      className={cn(
        buttonVariants({ variant: "outline", size: "lg" }),
        "mt-10 gap-2 rounded-full px-8"
      )}
    >
      {label}
      <LuArrowRight className="size-4" />
    </Link>
  )
}
