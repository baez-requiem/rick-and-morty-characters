import axios from "axios"

export const baseURL = 'https://rickandmortyapi.com/api'

export const httpClient = axios.create({ baseURL })