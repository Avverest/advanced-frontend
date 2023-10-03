import i18nTest from 'shared/config/i18n/i18nTest'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { ReactNode } from 'react'

export function renderWithTranslation(component: ReactNode) {
  return render(
    <I18nextProvider i18n={i18nTest}>
      {component}
    </I18nextProvider>,
  )
}
