import { Filter } from 'lucide-react'
import { Suspense, use } from 'react'

import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { fetcher } from '@/lib/utils'
import { Category } from '@/types'

import CategoriesFilter from './components/categories-filter'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const categories: Array<Category> = use(fetcher('categories'))

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-6">
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 bg-card rounded-lg border p-6">
                <Suspense>
                  <CategoriesFilter categories={categories} />
                </Suspense>
              </div>
            </aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[80vh]">
                  <SheetHeader>
                    <SheetTitle>Filter Products</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <Suspense>
                      <CategoriesFilter categories={categories} />
                    </Suspense>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <main className="flex-1">{children}</main>
          </div>
        </div>
      </div>
    </>
  )
}
