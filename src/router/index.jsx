import { RootLayout } from "@pages"
import { pages } from "@utiles"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    {
        path:'/',
        element: <RootLayout />,
        children: pages,
    }
])