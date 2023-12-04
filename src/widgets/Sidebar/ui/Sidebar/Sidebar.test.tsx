import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from 'widgets'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Sidebar', () => {
  test('Is rendered', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('Sidebar toggle test', async () => {
    componentRender(<Sidebar />)
    const toggleButton = screen.getByTestId('sidebar-toggle')
    await userEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
