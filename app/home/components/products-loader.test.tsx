import { render, screen } from '@testing-library/react'

import ProductsLoader from './products-loader'

describe('ProductsLoader', () => {
  it('renderiza 12 skeletons de produto', () => {
    render(<ProductsLoader />)
    // Cada produto tem uma div com border e rounded-lg
    const skeletons = screen
      .getAllByRole('generic', { hidden: true })
      .filter((element) => element.className.includes('border'))
    expect(skeletons).toHaveLength(12)
  })

  it('cada skeleton possui estrutura de loading', () => {
    render(<ProductsLoader />)
    // Verifica se há pelo menos um elemento com a classe animate-pulse
    const pulseElements = screen
      .getAllByRole('generic', { hidden: true })
      .filter((element) => element.className.includes('animate-pulse'))
    expect(pulseElements.length).toBeGreaterThan(0)
  })
})
