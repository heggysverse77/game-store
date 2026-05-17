import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Contact from "./pages/contact"
import SingleGame from "./components/ui/single_game"
import Signup from "./components/ui/signup"
import Login from "./components/login"
import AdminLayout from "./components/admin/AdminLayout"
import AdminDashboard from "./components/admin/AdminDashboard"

export const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/game/:id",
        element: <SingleGame />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminDashboard />
            }
        ]
    }
])
