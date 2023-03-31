import { createBrowserRouter } from "react-router-dom"
import { Character, Favorites, Home } from "src/pages"

export const router = createBrowserRouter([
  { path: '/favorites', element: <Favorites /> },
  { path: '/character/:id', element: <Character /> },
  { path: '/*', element: <Home /> }
])