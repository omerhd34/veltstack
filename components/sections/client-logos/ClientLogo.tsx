interface ClientLogoProps {
  name: string
  logoUrl?: string
}

export function ClientLogo({ name, logoUrl }: ClientLogoProps) {
  return (
    <div className="flex h-16 w-32 shrink-0 items-center justify-center rounded-lg border border-border bg-card px-4">
      {logoUrl ? (
        <img src={logoUrl} alt={name} className="max-h-10 max-w-full object-contain" />
      ) : (
        <span className="text-sm font-medium text-muted-foreground">{name}</span>
      )}
    </div>
  )
}
