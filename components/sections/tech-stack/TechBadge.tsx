interface TechBadgeProps {
  name: string
  iconName?: string
}

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs">
      {name}
    </span>
  )
}
