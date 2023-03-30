import { CardCharacter, Loader, Navbar } from 'src/components'
import { Filters, Footer, Hero, Pagination } from "./components"
import { Container, CharactersContent, LoaderContainer } from "./home.styles"
import { useHome } from "./hooks/useHome"

const Home = () => {

  const {
    characters,
    onFilter,
    isLoading,
    toTop,
    info,
    page,
    nextPage,
    prevPage,
    favorites,
    toggleFavorite
  } = useHome()

  return (
    <Container>
      <Navbar />
      <Hero />
      <Filters onFilter={onFilter} total={info?.count } />
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <CharactersContent>
          {characters.map(character => (
            <CardCharacter
              key={character.id}
              data={character}
              isFavorite={favorites.includes(character.id)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </CharactersContent>
      )}
      <Footer />

      <Pagination
        toTop={toTop}
        info={info}
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      />

    </Container> 
  )
}

export default Home