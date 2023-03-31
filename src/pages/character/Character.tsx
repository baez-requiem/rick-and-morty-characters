import { AiOutlineArrowLeft } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { Loader } from "src/components"
import { Container, Content, GoBackBtn, ImageContent, Infos, NotFoundContent, StyledTable } from "./character.styles"
import { useCharacter } from "./hooks/useCharacter"

const Character = () => {

  const {
    data,
    isFetching
  } = useCharacter()

  const navigate = useNavigate()

  if (isFetching) {
    return (
      <Container>
        <Loader />
      </Container>
    )
  }

  if (!data) {
    return (
      <Container>
        <NotFoundContent>
          <GoBackBtn onClick={() => navigate(-1)}>
            <AiOutlineArrowLeft size={20} />
          </GoBackBtn>
          
          Character not found
        </NotFoundContent>
      </Container>
    )
  }

  return (
    <Container>
      <Content>
        <GoBackBtn onClick={() => navigate(-1)}>
          <AiOutlineArrowLeft size={20} />
        </GoBackBtn>
        <Infos>
          <h1>{data.name}</h1>
          <StyledTable>
            <tbody>
              <tr>
                <th>Status:</th>
                <td>{data.status}</td>
              </tr>
              <tr>
                <th>Species:</th>
                <td>{data.species || 'unknown'}</td>
              </tr>
              <tr>
                <th>Type:</th>
                <td>{data.type || 'unknown'}</td>
              </tr>
              <tr>
                <th>Gender:</th>
                <td>{data.gender}</td>
              </tr>
              <tr>
                <th>Origin:</th>
                <td>{data.origin?.name || 'unknown'}</td>
              </tr>
            </tbody>
          </StyledTable>
        </Infos>
        <ImageContent>
          <img src={data?.image} alt={data?.name} />
        </ImageContent>
      </Content>
    </Container>
  )
}

export default Character