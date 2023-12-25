import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import {RoutesProvider} from "./store/GlobalState";
import HomeMobile from "./pages/HomeMobile/HomeMobile";

export default function AppRouter() {
    return(
        <BrowserRouter>
            <RoutesProvider>
                {
                    window.innerWidth > 425 ?
                        <Routes>
                            <Route element={<Home/>} path='/'/>
                        </Routes>
                        :
                        <Routes>
                            <Route element={<HomeMobile/>} path='/'/>
                        </Routes>
                }
            </RoutesProvider>
        </BrowserRouter>
    )
}