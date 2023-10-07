import { render, screen } from '@testing-library/react'
import { Button } from 'shared/ui'

describe('Button', () => {
  test('Without params', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
  test('Icon button', () => {
    render(<Button variant='clear'>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
  })
})
