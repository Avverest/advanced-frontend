import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { PageLoader } from 'widgets'
import { routeConfig } from '../config/routeConfig'

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, ...routeParams }, index) => (
          <Route
            {...routeParams}
            element={(
              <div className='wrapper'>
                {element}
              </div>
            )}
            key={index}
          />
        ))}
      </Routes>
    </Suspense>
  )
}
