import type { Preview } from '@storybook/react'
import { RouteDecorator, StyleDecorator, ThemeDecorator } from 'src/shared/storybook'
import { Theme } from 'src/app/providers/ThemeProvider'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouteDecorator],
}

export default preview
