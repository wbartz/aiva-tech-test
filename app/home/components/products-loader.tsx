export default function ProductsLoader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <div className="aspect-square bg-muted animate-pulse" />
          <div className="p-4 space-y-3">
            <div className="h-4 bg-muted animate-pulse rounded" />
            <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
            <div className="h-6 w-20 bg-muted animate-pulse rounded" />
            <div className="h-8 bg-muted animate-pulse rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}
