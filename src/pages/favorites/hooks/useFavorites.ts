import api from "src/api"

import { useQuery, useQueryClient } from "react-query"
import { toast } from "react-toastify"
import { useLocalStorage } from "src/hooks"

const useFavorites = () => {
  const [favorites, setFavorites] = useLocalStorage<number[]>('favorites', [])

  const queryClient = useQueryClient()

  const { data, isFetching } = useQuery(['favorites', favorites], async () => {
    if (favorites.length < 1) {
      return []
    }

    const response = await api.character.getManyById(favorites)

    if (!response) {
      toast.error('An error occurred.')
      return []
    }

    const formatedData = Array.isArray(response) ? response : [response]

    return formatedData
  }, { initialData: [] })

  const toggleFavorite = (id: number) => {
    const hasIn = favorites.includes(id)

    const cloneFavorites = JSON.parse(JSON.stringify(favorites))

    const newFavorites = hasIn
      ? favorites.filter(fv => fv !== id)
      : [...favorites, id]

    setFavorites(newFavorites)

    queryClient.removeQueries(['favorites', cloneFavorites])
  }

  const toTop = () => window.scrollTo(0,0)

  return {
    characters: data,
    isFetching,
    favorites,
    toggleFavorite,
    toTop
  }
}

export { useFavorites }