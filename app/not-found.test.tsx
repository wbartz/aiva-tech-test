import { render, screen } from '@testing-library/react'

import NotFound from './not-found'

describe('NotFound', () => {
  it('renderiza a imagem de página não encontrada', () => {
    render(<NotFound />)
    const img = screen.getByAltText('Página não encontrada')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src')
  })

  it('exibe o texto de fonte da ilustração', () => {
    render(<NotFound />)
    expect(screen.getByText(/Source: popsy.co/i)).toBeInTheDocument()
  })

  it('exibe a mensagem de página não encontrada', () => {
    render(<NotFound />)
    expect(
      screen.getByText('Oops! A página que você está procurando não existe.'),
    ).toBeInTheDocument()
  })
})
