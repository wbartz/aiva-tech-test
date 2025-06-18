import { render, screen } from '@testing-library/react'

import ProductsList from './products-lits'

jest.mock('./back-button', () => () => <button>Voltar</button>)

jest.mock('@/components/ui/badge', () => ({
  Badge: (props: any) => <span>{props.children}</span>,
}))
jest.mock('@/components/ui/button', () => ({
  Button: (props: any) => <button {...props} />,
}))
jest.mock('@/components/ui/card', () => ({
  Card: (props: any) => <div>{props.children}</div>,
  CardContent: (props: any) => <div>{props.children}</div>,
}))
jest.mock('@/components/pagination', () => ({
  Pagination: () => <div>Pagination</div>,
}))

describe('ProductsList', () => {
  it('renderiza mensagem de nenhum produto encontrado', async () => {
    const { fetcher } = require('@/lib/utils')
    fetcher.mockResolvedValueOnce([])
    // @ts-ignore
    const { findByText } = render(
      await ProductsList({ category: 'all', page: 1 }),
    )
    expect(await findByText('Nenhum produto encontrado')).toBeInTheDocument()
    expect(
      await findByText('Tente ajustar os filtros ou voltar mais tarde.'),
    ).toBeInTheDocument()
    expect(await findByText('Voltar')).toBeInTheDocument()
  })

  it('renderiza lista de produtos', async () => {
    const { fetcher } = require('@/lib/utils')
    fetcher.mockResolvedValueOnce([
      {
        id: 1,
        title: 'Produto 1',
        price: 100,
        images: ['/img1.png'],
        category: { name: 'Categoria 1' },
      },
    ])
    // @ts-ignore
    const { findByText } = render(
      await ProductsList({ category: 'all', page: 1 }),
    )
    expect(await findByText('Produto 1')).toBeInTheDocument()
    expect(await findByText('R$ 100.00')).toBeInTheDocument()
    expect(await findByText('Categoria 1')).toBeInTheDocument()
    expect(await findByText('Add to Cart')).toBeInTheDocument()
    expect(await findByText('Pagination')).toBeInTheDocument()
  })
})
