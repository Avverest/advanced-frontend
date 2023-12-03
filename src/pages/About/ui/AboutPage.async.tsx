import { lazy } from 'react'

// TODO Remove this shit with timeout
export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./AboutPage')), 1500)
}))
