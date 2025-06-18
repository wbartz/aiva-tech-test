import { renderHook, act } from '@testing-library/react'
import { useIsMobile } from './use-mobile'

describe('useIsMobile', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  beforeEach(() => {
    // @ts-ignore
    global.innerWidth = 1024
  })

  it('retorna false para desktop', () => {
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it('retorna true para mobile', () => {
    // @ts-ignore
    global.innerWidth = 500
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })
})
