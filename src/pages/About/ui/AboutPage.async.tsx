import { lazy } from 'react'

export const AboutPageAsync = lazy(() => new Promise(resolve =>
  // @ts-ignore
  // TODO Remove this shit with timout
  setTimeout(() => resolve(import('./AboutPage')), 1500),
))