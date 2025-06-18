'use client'

import { ShoppingBasket, Trash2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { formatarMoeda } from '@/lib/utils'
import { useCartStore } from '@/store/cart'

import { ImageWithFallback } from './image-fallback'

export default function Cart() {
  const cartItems = useCartStore((state) => state.items)
  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalCartValue = cartItems.reduce(
    (sum, item) => sum + item.price! * item.quantity,
    0,
  )

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          data-testid="shopping-cart"
        >
          <ShoppingBasket className="h-5 w-5" />
          {totalCartItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              {totalCartItems}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <h3 className="font-semibold">Shopping Cart</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center py-4">Cart is empty</p>
          ) : (
            <>
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title!}
                      width={48}
                      height={48}
                      className="rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {formatarMoeda(item.price!)} x {item.quantity}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Remove ${item.title}`}
                      onClick={() =>
                        useCartStore.getState().removeItem(Number(item.id))
                      }
                    >
                      <Trash2
                        className="h-4 w-4 text-red-500"
                        aria-hidden="true"
                        data-testid={`remove-item-${item.id}`}
                      />
                    </Button>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="flex justify-between items-center font-semibold">
                <span>Total:</span>
                <span>{formatarMoeda(totalCartValue)}</span>
              </div>
              <Button className="w-full">Checkout</Button>
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
