import { createBrowserRouter } from "react-router"
import Home from "./pages/home"
import Header from "./header"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/header",
        element: <Header />
    },

])
