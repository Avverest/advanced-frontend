import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "shared";
import {AboutPage} from "pages/About";
import {MainPage} from "pages/Main";


export function App () {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to='/about'>About</Link>
      <Link to='/'>Main</Link>
      <Suspense fallback='Loading...'>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<MainPage />}/>
        </Routes>
      </Suspense>
    </div>
  )
}