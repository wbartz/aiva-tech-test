'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'

type Props = {
  currentPage?: number
}

export function Pagination({ currentPage = 1 }: Props) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    if (page === 1) {
      params.delete('page')
    } else {
      params.set('page', page.toString())
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(Number(currentPage) - 1)}
        disabled={currentPage === 1}
        title="Página anterior"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="px-2">{currentPage}</span>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(Number(currentPage) + 1)}
        title="Próxima página"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
