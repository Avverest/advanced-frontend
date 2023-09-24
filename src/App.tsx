import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageAsync } from './pages/About/AboutPage.async'
import { MainPageAsync } from './pages/Main/MainPage.async'
import { Suspense } from 'react'
import { useTheme } from './theme/useTheme'


export function App () {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to='/about'>About</Link>
      <Link to='/'>Main</Link>
      <Suspense fallback='Loading...'>
        <Routes>
          <Route path='/about' element={<AboutPageAsync />} />
          <Route path='/' element={<MainPageAsync />}/>
        </Routes>
      </Suspense>
    </div>
  )
}