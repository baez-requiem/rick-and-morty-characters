import { httpClient } from "../httpClient"
import { GetCharacterParams, GetCharacterResponse, GetManyByIdResponse } from './character.types'

const getAllCharacters = async (params: GetCharacterParams): Promise<GetCharacterResponse|null> => {
  try {
    const response = await httpClient.get('character', { params })

    const data: GetCharacterResponse = response.data

    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

const getManyById = async (ids: number[]): Promise<GetManyByIdResponse|null> => {
  if (ids.length < 1) {
    return null
  }

  const formatedIds = ids.join(',')

  try {
    const response = await httpClient.get('character/'+ formatedIds)

    const data: GetManyByIdResponse = response.data

    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export default {
  getAllCharacters,
  getManyById
}