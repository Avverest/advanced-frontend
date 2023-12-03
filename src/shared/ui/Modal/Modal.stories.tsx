import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/storybook'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from './Modal'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>;

export const LightModal: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.,',
  },
}

export const DarkModal: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.,',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
