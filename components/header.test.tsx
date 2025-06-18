import { render, screen } from '@testing-library/react'

import Header from './header'

jest.mock('@/components/shopping-cart', () => () => (
  <div data-testid="shopping-cart">ShoppingCart</div>
))
jest.mock('./user-nav', () => () => <div data-testid="user-nav">UserNav</div>)

describe('Header', () => {
  it('renderiza o nome da loja', () => {
    render(<Header />)
    expect(screen.getByText(/aiva store/i)).toBeInTheDocument()
  })

  it('renderiza o componente ShoppingCart', () => {
    render(<Header />)
    expect(screen.getByTestId('shopping-cart')).toBeInTheDocument()
    expect(screen.getByText('ShoppingCart')).toBeInTheDocument()
  })

  it('renderiza o componente UserNav', () => {
    render(<Header />)
    expect(screen.getByTestId('user-nav')).toBeInTheDocument()
    expect(screen.getByText('UserNav')).toBeInTheDocument()
  })
})
