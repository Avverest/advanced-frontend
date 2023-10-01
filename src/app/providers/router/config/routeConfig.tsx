import { RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/Main'
import { AboutPage } from 'pages/About'
import { AppRoutes, RoutePath } from 'shared'
import { NotFound } from 'pages/NotFound'

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFound />,
  },
}
