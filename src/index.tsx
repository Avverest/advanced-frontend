import { render } from 'react-dom'
import { App } from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import ErrorBoundary from 'app/providers/ErrorBoundary/ui/ErrorBoundary'
import { ErrorStub } from 'widgets'

render(
  <BrowserRouter>
    <ErrorBoundary fallback={<ErrorStub />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
)
