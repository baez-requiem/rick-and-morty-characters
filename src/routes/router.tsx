import { createHashRouter } from "react-router-dom"
import { Character, Favorites, Home } from "src/pages"

export const router = createHashRouter([
  { path: '/favorites', element: <Favorites /> },
  { path: '/character/:id', element: <Character /> },
  { path: '/*', element: <Home /> }
], { basename: 'rick-and-morty-characters' })