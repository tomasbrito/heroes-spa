import { Route, Routes } from "react-router-dom"
import { Navbar } from "../ui/components"
import { PruebaComponent, PruebaComponent2 } from "./components"

export const PruebaRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container">

                <Routes>

                    <Route path="/uno" element={<PruebaComponent />} />
                    <Route path="/dos" element={<PruebaComponent2 />} />

                </Routes>

            </div>
        </>
    )
}
