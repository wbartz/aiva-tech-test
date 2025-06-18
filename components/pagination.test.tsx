import { fireEvent, render, screen } from '@testing-library/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Pagination } from './pagination'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}))

describe('Pagination', () => {
  const replace = jest.fn()
  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue({ replace })
    ;(usePathname as jest.Mock).mockReturnValue('/produtos')
    ;(useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams('category=1&page=2'),
    )
  })

  it('renderiza o número da página atual', () => {
    render(<Pagination currentPage={2} />)
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('botão anterior fica desabilitado na página 1', () => {
    render(<Pagination currentPage={1} />)
    expect(screen.getByTitle('Página anterior')).toBeDisabled()
  })

  it('chama replace ao clicar no botão de próxima página', () => {
    render(<Pagination currentPage={2} />)
    fireEvent.click(screen.getByTitle('Próxima página'))
    expect(replace).toHaveBeenCalledWith('/produtos?category=1&page=3')
  })

  it('chama replace ao clicar no botão de página anterior', () => {
    render(<Pagination currentPage={2} />)
    fireEvent.click(screen.getByTitle('Página anterior'))
    expect(replace).toHaveBeenCalledWith('/produtos?category=1')
  })

  it('remove o parâmetro page ao voltar para página 1', () => {
    ;(useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams('category=1&page=2'),
    )
    render(<Pagination currentPage={2} />)
    fireEvent.click(screen.getByTitle('Página anterior'))
    // O parâmetro page deve ser removido
    expect(replace).toHaveBeenCalledWith('/produtos?category=1')
  })
})
