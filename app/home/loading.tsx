import ProductsLoader from './components/products-loader'

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="h-8 w-32 bg-muted animate-pulse rounded mb-2" />
                <div className="h-4 w-48 bg-muted animate-pulse rounded" />
              </div>
            </div>
            <ProductsLoader />
          </main>
        </div>
      </div>
    </div>
  )
}
