import { fireEvent, render, screen } from '@testing-library/react'

import { ImageWithFallback } from './image-fallback'

jest.mock('next/image', () => (props: any) => {
  // Simula o componente Image do Next.js
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img {...props} />
})

describe('ImageWithFallback', () => {
  it('renderiza a imagem principal quando não há erro', () => {
    render(
      <ImageWithFallback
        src="/img.jpg"
        alt="imagem principal"
        width={100}
        height={100}
      />,
    )
    const img = screen.getByAltText('imagem principal')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/img.jpg')
  })

  it('renderiza a imagem de fallback quando ocorre um erro', () => {
    render(
      <ImageWithFallback
        src="/img.jpg"
        alt="imagem principal"
        width={100}
        height={100}
      />,
    )
    const img = screen.getByAltText('imagem principal')
    // Simula erro de carregamento da imagem
    fireEvent.error(img)
    expect(img).toHaveAttribute('src', '/img.jpg')
  })
})
