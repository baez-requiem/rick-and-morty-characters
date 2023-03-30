import { useState } from 'react'

import api from 'src/api'
import { GetCharacterParams, GetCharacterResponse } from 'src/api/character/character.types'

import { useQuery } from "react-query"
import { toast } from 'react-toastify'
import { useLocalStorage } from 'src/hooks'

const useHome = () => {
  const [favorites, setFavorites] = useLocalStorage<number[]>('favorites', [])
  const [filters, setFilters] = useState<GetCharacterParams>({ page: 1 })

  const { data, isFetching } = useQuery<GetCharacterResponse|null>(['characters', filters], async () => {
    const response = await api.character.getAllCharacters(filters)

    if (!response) {
      toast.error('An error occurred.')
    }

    return response
  }, { keepPreviousData: true })

  const onFilter = (values: GetCharacterParams) => setFilters({ ...values, page: 1 })

  const nextPage = () => setFilters(({ page, ...old }) => ({ ...old, page: page + 1 }))
  const prevPage = () => setFilters(({ page, ...old }) => ({ ...old, page: page - 1 }))

  const toTop = () => window.scrollTo(0,0)

  const toggleFavorite = (id: number) => {
    const hasIn = favorites.includes(id)

    const newFavorites = hasIn
      ? favorites.filter(fv => fv !== id)
      : [...favorites, id]

    setFavorites(newFavorites)
  }

  return {
    characters: data?.results || [],
    info: data?.info,
    nextPage,
    prevPage,
    onFilter,
    isLoading: isFetching,
    toTop,
    page: filters.page,
    favorites,
    toggleFavorite,
  }
}

export { useHome }