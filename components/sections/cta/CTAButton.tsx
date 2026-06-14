import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/shadcn"

interface CTAButtonProps {
  label: string
  href: string
}

export function CTAButton({ label, href }: CTAButtonProps) {
  return (
    <Button size="lg" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  )
}
