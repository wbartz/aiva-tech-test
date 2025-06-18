import Link from 'next/link'

import AddCart from '@/components/add-cart'
import { ImageWithFallback } from '@/components/image-fallback'
import { Pagination } from '@/components/pagination'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { fetcher, formatarMoeda, truncateTitle } from '@/lib/utils'
import { Product } from '@/types'

import BackButton from './back-button'

type Props = {
  category: string
  page: number
}

export default async function ProductsList({
  category = 'all',
  page = 1,
}: Props) {
  const url =
    category === 'all' ? 'products' : `categories/${category}/products`
  const params = new URLSearchParams({
    offset: String((page - 1) * 20),
    limit: '20',
  })
  const products = await fetcher(`${url}?${params.toString()}`, {
    next: { revalidate: 5 * 60 * 1000 },
  })

  if (!products || products.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center p-6">
          <h3 className="text-lg font-semibold">Nenhum produto encontrado</h3>
          <p className="text-muted-foreground mt-2">
            Tente ajustar os filtros ou voltar mais tarde.
          </p>
          <BackButton />
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-1 overflow-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product: Product) => (
            <Link
              href={`/product/${product.slug}`}
              key={product.id}
              className="block"
            >
              <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm py-0">
                <CardContent className="p-0 m-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg bg-muted">
                    <ImageWithFallback
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      sizes="width: 276px; height: 276px;"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {product.category.name}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-base line-clamp-2 group-hover:text-primary transition-colors">
                        {truncateTitle(product.title, 25)}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="font-bold text-lg text-primary">
                        {formatarMoeda(product.price)}
                      </p>
                    </div>

                    <AddCart product={product} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <div className="p-4 md:p-6">
        <Pagination currentPage={page} />
      </div>
    </div>
  )
}
