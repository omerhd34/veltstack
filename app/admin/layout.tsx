export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <aside className="hidden w-64 border-r border-border bg-card p-6 md:block">
        <p className="font-bold">Veltstack Admin</p>
      </aside>
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
