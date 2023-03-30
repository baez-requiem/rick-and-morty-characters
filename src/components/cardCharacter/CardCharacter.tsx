import { FC } from 'react'
import { BtnContent, Container, ImageContent, NameContent } from "./CardCharacter.styles"

import { BsStar, BsStarFill } from 'react-icons/bs'

import { CharacterType } from 'src/api/character/character.types'

interface CardCharacterProps {
  data: CharacterType
  isFavorite: boolean
  toggleFavorite: (arg0: number) => void
}

const CardCharacter: FC<CardCharacterProps> = ({ data, isFavorite, toggleFavorite }) => {

  return (
    <Container>
      <ImageContent>
        <img src={data.image || ''} alt="teste" />
      </ImageContent>
      <NameContent>
        {data.name}
      </NameContent>

      <BtnContent isFavorite={isFavorite} onClick={() => toggleFavorite(data.id)}>
        {isFavorite ? <BsStarFill size={30} /> : <BsStar size={30} />}
      </BtnContent>
    </Container>
  )
}

export default CardCharacter