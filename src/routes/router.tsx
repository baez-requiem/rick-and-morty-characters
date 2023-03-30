import { createBrowserRouter } from "react-router-dom"
import { Favorites, Home } from "src/pages"

export const router = createBrowserRouter([
  { path: '/favorites', element: <Favorites /> },
  { path: '/*', element: <Home /> }
])