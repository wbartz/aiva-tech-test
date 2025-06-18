export default function SidebarLoader() {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-24 bg-card rounded-lg border p-6">
        <div className="h-6 w-20 bg-muted animate-pulse rounded mb-4" />
        <div className="space-y-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-8 bg-muted animate-pulse rounded" />
          ))}
        </div>
      </div>
    </aside>
  )
}
