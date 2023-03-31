import { removeEmptyFields } from "src/utils/object.utils"
import { httpClient } from "../httpClient"
import { GetByIdResponse, GetCharacterParams, GetCharacterResponse, GetManyByIdResponse } from './character.types'

const getAllCharacters = async (params: GetCharacterParams): Promise<GetCharacterResponse|null> => {
  try {
    const response = await httpClient.get('character', { params: removeEmptyFields(params) })

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

const getById = async (id: number): Promise<GetByIdResponse|null> => {
  if (!id) {
    return null
  }

  try {
    const response = await httpClient.get('character/'+ id)

    const data: GetByIdResponse = response.data

    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export default {
  getAllCharacters,
  getManyById,
  getById
}