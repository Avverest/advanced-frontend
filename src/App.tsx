import './index.scss'
import { Link, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/About/AboutPage'
import MainPage from './pages/Main/MainPage'
import { AboutPageAsync } from './pages/About/AboutPage.async'
import { MainPageAsync } from './pages/Main/MainPage.async'
import { Suspense } from 'react'
export function App () {
  return (
    <div className='app'>
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