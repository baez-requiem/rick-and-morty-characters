export type InfoType = {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export type CharacterType = {
  id: number
  name: string
  status: 'Alive' | 'Dead' | 'Unknown'
  species: string
  type: string
  gender: 'Male' | 'Female' | 'Genderless' | 'Unknown' 
  
  origin: {
    name: string
    url: string
  }

  location: {
    name: string
    url: string
  }

  image: string
  episode: string[]
  url: string
  created: string
}

export type GetCharacterParams = {
  page: number
  name?: string
  status?: 'alive' | 'dead' | 'unknown'
  species?: string
  type?: string
  gender?: 'male' | 'female' | 'genderless' | 'unknown' 
}

export type GetCharacterResponse = {
  info: InfoType
  results: CharacterType[]
}

export type GetManyByIdResponse = CharacterType | CharacterType[]

export type GetByIdResponse = CharacterType