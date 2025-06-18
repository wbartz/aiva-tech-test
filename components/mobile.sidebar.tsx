'use client'

import { Menu } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

export default function MobileSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className="mt-6">{/* <CategoryFilter /> */}</div>
      </SheetContent>
    </Sheet>
  )
}
