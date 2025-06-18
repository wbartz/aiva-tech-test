import { fireEvent, render, screen } from '@testing-library/react'

import ProductError from './error'

describe('ProductError', () => {
  it('deve exibir a mensagem de produto não encontrado', () => {
    render(<ProductError />)
    expect(screen.getByText('Product Not Found')).toBeInTheDocument()
    expect(
      screen.getByText(
        /Sorry, we couldn't find the product you are looking for/i,
      ),
    ).toBeInTheDocument()
  })

  it('deve chamar router.back ao clicar no botão', () => {
    const backMock = jest.fn()
    jest
      .spyOn(require('next/navigation'), 'useRouter')
      .mockReturnValue({ back: backMock })
    render(<ProductError />)
    const button = screen.getByRole('button', { name: /go back/i })
    fireEvent.click(button)
    expect(backMock).toHaveBeenCalled()
  })
})
