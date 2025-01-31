import { pages } from "@utiles/pages";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <></>,
        children: pages,
    }
])