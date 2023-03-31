import { FC } from 'react'
import { BtnContent, Container, ImageContent, NameContent } from "./CardCharacter.styles"

import { BsStar, BsStarFill } from 'react-icons/bs'

import { CharacterType } from 'src/api/character/character.types'
import { useNavigate } from 'react-router-dom'

interface CardCharacterProps {
  data: CharacterType
  isFavorite: boolean
  toggleFavorite: (arg0: number) => void
}

const CardCharacter: FC<CardCharacterProps> = ({ data, isFavorite, toggleFavorite }) => {

  const navigate = useNavigate()

  const toCharacterPage = () => navigate('/character/' + data.id)

  return (
    <Container >
      <ImageContent onClick={toCharacterPage}>
        <img src={data.image || ''} alt="teste" />
      </ImageContent>
      <NameContent onClick={toCharacterPage}>
        {data.name}
      </NameContent>

      <BtnContent isFavorite={isFavorite} onClick={() => toggleFavorite(data.id)}>
        {isFavorite ? <BsStarFill size={30} /> : <BsStar size={30} />}
      </BtnContent>
    </Container>
  )
}

export default CardCharacter