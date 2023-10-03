import { render, screen } from '@testing-library/react'
import { Button } from 'shared/ui'

describe('Button', () => {
  test('Without params', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
  test('Icon button', () => {
    render(<Button variant='icon'>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('icon')
    screen.debug()
  })
})
