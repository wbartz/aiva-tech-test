import { fireEvent, render, screen } from '@testing-library/react'

import { useCartStore } from '@/store/cart'

import Cart from './shopping-cart'

describe('Cart', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart()
    localStorage.clear()
  })

  it('should show empty message when cart is empty', () => {
    render(<Cart />)
    fireEvent.click(screen.getByTestId('shopping-cart'))
    expect(screen.getByText(/cart is empty/i)).toBeInTheDocument()
  })

  it('should show items in cart', () => {
    useCartStore.getState().addItem({
      id: '1',
      title: 'Test Product',
      price: 10,
      quantity: 2,
      image: '/img.png',
    })
    render(<Cart />)
    fireEvent.click(screen.getByTestId('shopping-cart'))
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('R$ 10.00 x 2')).toBeInTheDocument()
    expect(screen.getByText('Total:')).toBeInTheDocument()
    expect(screen.getByText('R$ 20.00')).toBeInTheDocument()
  })

  it('should remove item from cart when remove button is clicked', () => {
    useCartStore.getState().addItem({
      id: '2',
      title: 'Remove Me',
      price: 5,
      quantity: 1,
      image: '/img2.png',
    })
    render(<Cart />)
    fireEvent.click(screen.getByTestId('shopping-cart'))
    // Seleciona o botão pelo aria-label
    const removeButton = screen.queryByTestId('remove-item-2')
    expect(removeButton).toBeTruthy()
    fireEvent.click(removeButton!)
  })

  it('should show the correct badge count', () => {
    useCartStore.getState().addItem({
      id: '3',
      title: 'Badge Product',
      price: 1,
      quantity: 3,
      image: '/img3.png',
    })
    render(<Cart />)
    fireEvent.click(screen.getByTestId('shopping-cart'))
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})
