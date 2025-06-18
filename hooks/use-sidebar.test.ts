import { act } from '@testing-library/react'
import { useSidebar } from './use-sidebar'

describe('useSidebar', () => {
  it('toggle alterna o estado de isMinimized', () => {
    const store = useSidebar.getState()
    const initial = store.isMinimized
    act(() => {
      useSidebar.getState().toggle()
    })
    expect(useSidebar.getState().isMinimized).toBe(!initial)
  })

  it('setAnimating altera o estado de animating', () => {
    act(() => {
      useSidebar.getState().setAnimating(true)
    })
    expect(useSidebar.getState().animating).toBe(true)
  })
})
