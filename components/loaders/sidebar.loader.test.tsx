import { render, screen } from '@testing-library/react'

import SidebarLoader from './sidebar.loader'

describe('SidebarLoader', () => {
  it('renderiza o aside com classes responsivas', () => {
    render(<SidebarLoader />)
    const aside = screen.getByRole('complementary')
    expect(aside).toHaveClass('hidden')
    expect(aside).toHaveClass('lg:block')
  })

  it('renderiza o título de loading', () => {
    render(<SidebarLoader />)
    expect(
      screen.getByRole('complementary').querySelector('.h-6.w-20'),
    ).toBeInTheDocument()
  })

  it('renderiza 6 linhas de loading', () => {
    render(<SidebarLoader />)
    const lines = screen
      .getByRole('complementary')
      .querySelectorAll('.h-8.bg-muted')
    expect(lines.length).toBe(6)
  })
})
