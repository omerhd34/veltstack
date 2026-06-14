import { TechBadge } from "./TechBadge"

interface TechGroupProps {
  title: string
  technologies: string[]
}

export function TechGroup({ title, technologies }: TechGroupProps) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-muted-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>
    </div>
  )
}
