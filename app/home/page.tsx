import { Suspense } from 'react'

import ProductsLits from './components/products-lits'
import ProductsLoader from './components/products-loader'

type Props = {
  searchParams: Promise<{
    category?: string
    page?: number
  }>
}

export default async function Home({ searchParams }: Props) {
  const { category, page } = await searchParams

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Produtos</h2>
        </div>
      </div>

      <Suspense key={category! + page!} fallback={<ProductsLoader />}>
        <ProductsLits category={category!} page={page!} />
      </Suspense>
    </>
  )
}
