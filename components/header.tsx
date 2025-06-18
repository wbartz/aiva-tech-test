import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'

import ShoppingCart from '@/components/shopping-cart'

import UserNav from './user-nav'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-primary font-bold" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              <Link href="/">Aiva Store</Link>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ShoppingCart />
          <UserNav />
        </div>
      </div>
    </header>
  )
}
