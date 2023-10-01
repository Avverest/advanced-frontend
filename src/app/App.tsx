import './styles/index.scss'
import { classNames } from 'shared'
import { Navbar, Sidebar } from 'widgets'
import { Suspense } from 'react'
import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider'

export function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback='Loading...'>
        <Navbar />
        <div className='content'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
