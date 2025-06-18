import '@testing-library/jest-dom'

jest.mock('next-auth/react')

jest.mock('sonner', () => ({
  toast: { error: jest.fn() },
}))

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(() => ({
    get: jest.fn(),
  })),
  usePathname: jest.fn(() => '/'),
  useRouter: jest.fn(() => ({
    replace: jest.fn(),
  })),
}))

jest.mock('@/components/image-fallback', () => ({
  ImageWithFallback: (props) => <img {...props} />,
}))

jest.mock('@/lib/utils', () => {
  const original = jest.requireActual('@/lib/utils')
  return {
    ...original,
    formatarMoeda: (v) => `R$ ${v.toFixed(2)}`,
    truncateTitle: (title, maxLength = 50) => {
      if (title.length <= maxLength) return title
      return `${title.slice(0, maxLength - 3)}...`
    },
    fetcher: jest.fn(),
    cn: (...args) => args.filter(Boolean).join(' '),
  }
})
