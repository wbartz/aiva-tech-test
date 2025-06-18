import { render } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
import mockRouter from 'next-router-mock'

export const renderWithRouter = (ui: React.ReactElement) =>
  render(
    <RouterContext.Provider value={mockRouter}>{ui}</RouterContext.Provider>,
  )
