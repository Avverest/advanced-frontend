import { Decorator } from '@storybook/react'
import 'app/styles/index.scss'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
  <ThemeProvider initTheme={theme}>
    <div className='app'>
      <Story />
    </div>
  </ThemeProvider>
)
