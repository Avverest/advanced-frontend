import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/storybook'
import { Theme } from 'app/providers/ThemeProvider'
import { Button } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click',
  },
}

export const Clear: Story = {
  args: {
    variant: 'clear',
    children: 'Click',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlinedLight: Story = {
  args: {
    variant: 'outlined',
    children: 'Text',
  },
  decorators: [],
}

export const OutlinedDark: Story = {
  args: {
    variant: 'outlined',
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
