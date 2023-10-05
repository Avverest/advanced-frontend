import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/storybook'
import { Theme } from 'app/providers/ThemeProvider'
import { ErrorStub } from './ErrorStub'

const meta = {
  title: 'widgets/ErrorStub',
  component: ErrorStub,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof ErrorStub>

export default meta
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [],
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
}
