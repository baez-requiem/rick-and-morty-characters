import { BsChevronUp } from "react-icons/bs"
import { Navbar, CardCharacter, Loader } from "src/components"
import { useWindowScroll } from "src/hooks"
import { Container, Content, Title, CharactersContent, LoaderContainer, BtnToUp } from "./favorites.styles"
import { useFavorites } from "./hooks/useFavorites"

const Favorites = () => {

  const { characters, isFetching, toggleFavorite, favorites, toTop } = useFavorites()

  const { y: scrollY } = useWindowScroll()

  return (
    <Container>
      <Navbar />
      <Content>
        <Title>Favorite characters {favorites.length || ''}</Title>
        {isFetching ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <CharactersContent>
            {characters?.map(character => (
              <CardCharacter
                key={character.id}
                data={character}
                isFavorite={favorites.includes(character.id)}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </CharactersContent>
        )}
      </Content>

      {scrollY > 150 ? (
        <BtnToUp onClick={toTop}>
          <BsChevronUp size={22} />
        </BtnToUp>
      ) : null}
    </Container>
  )
}

export default Favorites