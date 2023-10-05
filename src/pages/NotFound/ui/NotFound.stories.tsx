import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/storybook'
import { Theme } from 'app/providers/ThemeProvider'
import { NotFound } from './NotFound'

const meta = {
  title: 'pages/NotFound',
  component: NotFound,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof NotFound>

export default meta
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
}

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
}
