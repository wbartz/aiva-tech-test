import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { useCartStore } from '@/store/cart'

import AddCart from './add-cart'

jest.mock('sonner', () => ({ toast: { success: jest.fn() } }))

describe('AddCart', () => {
  const product = {
    id: '1',
    title: 'Test Product',
    price: 10,
    images: ['/img.png'],
  }

  beforeEach(() => {
    useCartStore.getState().clearCart()
    localStorage.clear()
    jest.clearAllMocks()
  })

  it('should render button', () => {
    render(<AddCart product={product} />)
    expect(
      screen.getByRole('button', { name: /add to cart/i }),
    ).toBeInTheDocument()
  })

  it('should show loading and add item to cart', async () => {
    render(<AddCart product={product} />)
    const button = screen.getByRole('button', { name: /add to cart/i })
    fireEvent.click(button)
    expect(screen.getByText(/adding/i)).toBeInTheDocument()
    await waitFor(() =>
      expect(
        screen.getByRole('button', { name: /add to cart/i }),
      ).not.toBeDisabled(),
    )
    const items = useCartStore.getState().items
    expect(items.length).toBe(1)
    expect(items[0].title).toBe('Test Product')
  })
})
