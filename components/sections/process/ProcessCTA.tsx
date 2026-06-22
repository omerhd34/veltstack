import { LuMessageCircle } from "react-icons/lu"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/shadcn"

interface ProcessCTAProps {
  label: string
}

export function ProcessCTA({ label }: ProcessCTAProps) {
  return (
    <Button size="lg" className="rounded-full px-8" asChild>
      <Link href="/iletisim">
        <LuMessageCircle className="size-4" aria-hidden />
        {label}
      </Link>
    </Button>
  )
}
