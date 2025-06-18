import { fireEvent, screen } from '@testing-library/react'

import { renderWithRouter } from '@/lib/test.utils'
import { Category } from '@/types'

import CategoriesFilter from './categories-filter'

describe('CategoriesFilter (Client Component)', () => {
  const categories: Category[] = [
    {
      id: 'all',
      name: 'Todos',
      slug: 'all',
      image: '',
      creationAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'eletronicos',
      name: 'Eletrônicos',
      slug: 'eletronicos',
      image: '',
      creationAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'roupas',
      name: 'Roupas',
      slug: 'roupas',
      image: '',
      creationAt: new Date(),
      updatedAt: new Date(),
    },
  ]

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renderiza o título e as categorias', () => {
    renderWithRouter(<CategoriesFilter categories={categories} />)
    expect(screen.getByText('Categories')).toBeInTheDocument()
    categories.forEach((cat) => {
      expect(screen.getByText(cat.name)).toBeInTheDocument()
    })
  })

  it('chama handleCategoryChange ao clicar em uma categoria diferente da selecionada', () => {
    const replace = jest.fn()
    require('next/navigation').useSearchParams.mockReturnValue({
      get: (key: string) => (key === 'category' ? 'all' : undefined),
    })
    require('next/navigation').useRouter.mockReturnValue({
      replace,
    })
    renderWithRouter(<CategoriesFilter categories={categories} />)

    fireEvent.click(screen.getByRole('button', { name: 'Eletrônicos' }))
    expect(replace).toHaveBeenCalledWith(
      expect.stringContaining('category=eletronicos'),
    )
  })

  it('chama handleCategoryChange com "all" ao clicar na categoria já selecionada', () => {
    const replace = jest.fn()
    require('next/navigation').useSearchParams.mockReturnValue({
      get: (key: string) => (key === 'category' ? 'eletronicos' : undefined),
    })
    require('next/navigation').useRouter.mockReturnValue({
      replace,
    })
    renderWithRouter(<CategoriesFilter categories={categories} />)
    fireEvent.click(screen.getByRole('button', { name: 'Eletrônicos' }))
    expect(replace).toHaveBeenCalledWith(expect.stringContaining(''))
  })
})
