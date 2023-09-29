import './styles/index.scss'
import {useTheme} from './providers/ThemeProvider'
import {classNames} from 'shared'
import {AppRouter} from './providers/router'
import {Navbar} from 'widgets'

export function App () {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}