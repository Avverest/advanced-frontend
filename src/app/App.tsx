import './styles/index.scss'
import { Link } from 'react-router-dom'
import {useTheme} from './providers/ThemeProvider'
import {classNames} from 'shared'
import {AppRouter} from './providers/router'

export function App () {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to='/about'>About</Link>
      <Link to='/'>Main</Link>
      <AppRouter />
    </div>
  )
}