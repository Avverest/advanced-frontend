import {
  ErrorInfo, ReactNode, Component, Suspense,
} from 'react'

interface ErrorBoundaryProps {
  fallback: ReactNode
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info.componentStack)
  }

  render() {
    const { hasError } = this.state
    const { fallback, children } = this.props
    if (hasError) {
      return (
        <Suspense fallback=''>
          {fallback}
        </Suspense>
      )
    }

    return children
  }
}

export default ErrorBoundary
