'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Category } from '@/types'

type Props = {
  categories: Array<Category>
}

export default function CategoriesFilter({ categories }: Props) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (categoryId === 'all') {
      params.delete('category')
    } else {
      params.set('category', categoryId)
    }
    replace(`${pathname}?${params.toString()}`)
  }
  const selectedCategory = searchParams.get('category') || 'all'

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-lg mb-3">Categories</h3>
        <div className="space-y-1">
          {categories.map((category: Category) => (
            <button
              key={category.id}
              onClick={() => {
                if (category.id) {
                  handleCategoryChange(
                    String(selectedCategory) === String(category.id)
                      ? 'all'
                      : category.id,
                  )
                }
              }}
              className={`block cursor-pointer w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                String(selectedCategory) === String(category.id)
                  ? 'bg-primary text-primary-foreground font-medium'
                  : 'hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
