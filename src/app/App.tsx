import './styles/index.scss'
import {useTheme} from './providers/ThemeProvider'
import {classNames} from 'shared'
import {AppRouter} from './providers/router'
import {Navbar, Sidebar} from 'widgets'
import 'shared';
import {Suspense} from 'react'
export function App () {
  const {theme} = useTheme()

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