import { screen } from '@testing-library/react'

import { renderWithRouter } from '@/lib/test.utils'

import BackButton from './back-button'

describe('BackButton (Client Component)', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renderiza o texto "Voltar"', () => {
    renderWithRouter(<BackButton />)
    expect(screen.getByText(/voltar/i)).toBeInTheDocument()
  })
})
