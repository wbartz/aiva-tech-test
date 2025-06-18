import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MobileSidebar from './mobile.sidebar'

describe('MobileSidebar', () => {
  it('renderiza o botão de menu', () => {
    render(<MobileSidebar />)
    expect(
      screen.getByRole('button', { name: /open menu/i }),
    ).toBeInTheDocument()
  })

  it('abre o sidebar ao clicar no botão de menu', async () => {
    render(<MobileSidebar />)
    const user = userEvent.setup()
    const button = screen.getByRole('button', { name: /open menu/i })
    await user.click(button)
    // O título do sidebar deve aparecer
    expect(screen.getByText('Filters')).toBeInTheDocument()
  })
})
