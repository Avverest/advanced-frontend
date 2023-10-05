import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/storybook'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink } from './AppLink'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    to: '/',
  },
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
  args: {
    variant: 'primary',
    children: 'Link',
  },
}

export const SecondaryLight: Story = {
  args: {
    variant: 'secondary',
    children: 'Link',
  },
}

export const PrimaryDark: Story = {
  args: {
    variant: 'primary',
    children: 'Link',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const SecondaryDark: Story = {
  args: {
    variant: 'secondary',
    children: 'Link',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
