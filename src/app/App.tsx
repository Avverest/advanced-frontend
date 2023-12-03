import { Navbar, Sidebar } from 'widgets'
import { Suspense } from 'react'
import { classNames } from 'shared/lib'
import { AppRouter } from './providers/router'

export function App() {
  return (
    <div id='app' className={classNames('app', {})}>
      <Suspense fallback='Loading...'>
        <Sidebar />
        <div className='content'>
          <Navbar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
