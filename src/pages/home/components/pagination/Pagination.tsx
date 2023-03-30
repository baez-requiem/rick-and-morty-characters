import { FC } from 'react'

import { BtnToUpContent, Container, Content, Page, StyledBtn } from "./pagination.styles"
import { BsChevronLeft, BsChevronRight, BsChevronUp } from 'react-icons/bs'
import { useWindowScroll } from 'src/hooks'
import { InfoType } from 'src/api/character/character.types'

interface PaginationProps {
  toTop: () => void
  info?: InfoType
  nextPage: () => void
  prevPage: () => void
  page: number
}

const Pagination: FC<PaginationProps> = ({ toTop, info, nextPage, prevPage, page }) => {
  
  const { y: scrollY } = useWindowScroll()

  return (
    <Container show={(scrollY > 150 && !!info)}>
      <Content>
        <StyledBtn onClick={prevPage} disabled={page == 1}>
          <BsChevronLeft size={22} />
        </StyledBtn>

        <Page>
          {page}
        </Page>

        <StyledBtn onClick={nextPage} disabled={!info?.pages || page == info?.pages}>
          <BsChevronRight size={22} />
        </StyledBtn>
      </Content>

      <BtnToUpContent>
        <StyledBtn onClick={toTop}>
          <BsChevronUp size={22} />
        </StyledBtn>
      </BtnToUpContent>
      
    </Container>
  )
}

export default Pagination