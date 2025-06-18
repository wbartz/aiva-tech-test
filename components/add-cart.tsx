'use client'

import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart'

export default function AddCart({
  product,
}: {
  product: { id: string; title: string; price: number; images: Array<string> }
}) {
  const addItem = useCartStore((state) => state.addItem)
  const [loading, setLoading] = useState(false)

  async function handleAdd() {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    })
    setLoading(false)
    toast.success('Product added to cart!')
  }

  return (
    <Button
      type="button"
      className="w-full mt-2"
      onClick={handleAdd}
      disabled={loading}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="animate-spin h-4 w-4" />
          Adding...
        </span>
      ) : (
        'Add to Cart'
      )}
    </Button>
  )
}
