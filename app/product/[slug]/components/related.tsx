import AddCart from '@/components/add-cart'
import { ImageWithFallback } from '@/components/image-fallback'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { fetcher, formatarMoeda, truncateTitle } from '@/lib/utils'

type Props = {
  productId: string
}

export default async function RelatedProducts({ productId }: Props) {
  const products = await fetcher(`products/slug/${productId}/related`)

  if (!products || products.length === 0) {
    return
  }

  return (
    <div className="w-full max-w-5xl px-4 md:px-6 mt-10">
      <h2 data-testid="related-title" className="text-lg font-semibold mb-4">
        Customers also bought
      </h2>
      <Carousel className="relative">
        <CarouselContent>
          {products.map((product: any) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/3"
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
