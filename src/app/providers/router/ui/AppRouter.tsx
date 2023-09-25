import {Route, Routes} from "react-router-dom"
import {Suspense} from "react"
import {routeConfig} from '../config/routeConfig'

export function AppRouter () {
    return (
        <Suspense fallback='Loading...'>
            <Routes>
              {Object.values(routeConfig).map(routeParams => <Route {...routeParams} />)}
            </Routes>
        </Suspense>
    );
}