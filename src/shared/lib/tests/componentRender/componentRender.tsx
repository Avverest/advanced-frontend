import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nTest from 'shared/config/i18n/i18nTest'
import { MemoryRouter } from 'react-router-dom'
import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'

interface ComponentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options?: ComponentRenderOptions) {
  const {
    route = '/',
    initialState,
  } = options

  return render(
    <StoreProvider initialState={initialState as StateSchema}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nTest}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  )
}
