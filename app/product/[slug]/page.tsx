import AddCart from '@/components/add-cart'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { fetcher, formatarMoeda } from '@/lib/utils'

import Carrousel from './components/carrousel'
import RelatedProducts from './components/related'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductPage({ params }: Props) {
  const { slug: productId } = await params
  const product = await fetcher(`products/slug/${productId}`)

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-8 px-4">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Carrousel images={product.images} title={product.title} />

        <div className="w-full flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <Badge variant="secondary" className="text-xs font-medium mb-2">
              {product.category.name}
            </Badge>
            <p className="text-lg font-semibold text-primary mt-2 mb-4">
              {formatarMoeda(product.price)}
            </p>
            <p className="text-base text-muted-foreground mb-4">
              {product.description}
            </p>
          </div>
          <form className="flex flex-col gap-4 items-start">
            <label htmlFor="quantity" className="font-medium">
              Quantity
            </label>
            <Input
              id="quantity"
              name="quantity"
              type="number"
              min={1}
              defaultValue={1}
              className="w-24"
            />
            <AddCart product={product} />
          </form>
        </div>
      </div>

      <hr className="my-10 w-full max-w-5xl border-t border-gray-200" />

      <RelatedProducts productId={productId} />
    </div>
  )
}
