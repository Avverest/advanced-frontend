import { screen } from '@testing-library/react'
import { Sidebar } from 'widgets'
import { renderWithTranslation } from 'shared/lib'
import { userEvent } from '@storybook/testing-library'

describe('Sidebar', () => {
  test('Is rendered', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('Is rendered', () => {
    renderWithTranslation(<Sidebar />)
    const toggleButton = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    userEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
