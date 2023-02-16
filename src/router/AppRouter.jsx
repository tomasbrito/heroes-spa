import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../auth/pages/Login"
import { Navbar } from '../ui/components'
import { DcPage } from "../heroes/pages/DcPage"
import { MarvelPage } from "../heroes/pages/MarvelPage"
import { HeroesRoutes } from "../heroes"
import { PruebaRoutes } from "../prueba/PruebaRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />

                {/* <Route path="login" element={<Login />} /> */}

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                }

                />



                {/* <Route path="/*" element={<HeroesRoutes />} /> */}

                <Route path="prueba/*" element={
                    <PrivateRoute>
                        <Routes>
                            <Route path="/*" element={<PruebaRoutes />} />
                        </Routes>
                    </PrivateRoute>
                } />




            </Routes>
        </>
    )
}
