import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from 'widgets'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
  test('Is rendered', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('Sidebar toggle test', async () => {
    renderWithTranslation(<Sidebar />)
    const toggleButton = screen.getByTestId('sidebar-toggle')
    await userEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
