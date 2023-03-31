import api from "src/api"

import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"

const useCharacter = () => {

  const { id } = useParams()

  const { data, isFetching } = useQuery(['character', id], async () => {
    if (!id) { return null }

    const idCharacter = parseInt(id)

    const response = await api.character.getById(idCharacter)

    if (!response) {
      toast.error('An error occurred.')
      return null
    }

    return response
  }, { staleTime: 60 * ( 60 * 1000 ) })

  return {
    data,
    isFetching
  }
}

export { useCharacter }