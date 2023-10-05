import { Decorator } from '@storybook/react'
import 'app/styles/index.scss'
import { Theme } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
)
