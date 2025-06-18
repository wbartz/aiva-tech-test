import { renderHook, act } from '@testing-library/react'
import useWindowSize from './use-window-size'

describe('useWindowSize', () => {
  beforeEach(() => {
    // @ts-ignore
    global.innerWidth = 1024
    // @ts-ignore
    global.innerHeight = 768
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })
  })

  it('retorna o tamanho da janela e flags de isMobile/isDesktop', () => {
    const { result } = renderHook(() => useWindowSize())
    expect(result.current.windowSize.width).toBe(1024)
    expect(result.current.windowSize.height).toBe(768)
    expect(result.current.isMobile).toBe(false)
    expect(result.current.isDesktop).toBe(true)
  })

  it('detecta mobile corretamente', () => {
    // @ts-ignore
    global.innerWidth = 500
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })
    const { result } = renderHook(() => useWindowSize())
    expect(result.current.isMobile).toBe(true)
    expect(result.current.isDesktop).toBe(false)
  })
})
