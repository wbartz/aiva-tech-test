import { renderHook } from '@testing-library/react'
import { useMobileNavigation } from './use-mobile-navigation'

describe('useMobileNavigation', () => {
  it('remove pointer-events do body ao chamar cleanup', () => {
    document.body.style.pointerEvents = 'none'
    const { result } = renderHook(() => useMobileNavigation())
    result.current()
    expect(document.body.style.pointerEvents).toBe('')
  })
})
