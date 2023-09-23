import { lazy } from 'react'

export const MainPageAsync = lazy(() => new Promise(resolve =>
  // @ts-ignore
  // TODO Remove this shit with timout
  setTimeout(() => resolve(import('./MainPage')), 1500),
))