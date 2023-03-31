import styled from "styled-components"

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 80px 20px 40px 20px;
`

export const Content = styled.div`
  position: relative;

  padding: 20px;

  border-radius: 2px;
  border: 1px solid white;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (${({ theme }) => theme.device.xl}) {
    grid-template-columns: 2fr 1fr;
  }

  @media (${({ theme }) => theme.device.lg}) {
    grid-template-columns: 2fr 1fr;
  }

  @media (${({ theme }) => theme.device.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (${({ theme }) => theme.device.sm}) {
    grid-template-columns: 1fr;
  }
`

export const Infos = styled.div`
  h1 {
    font-weight: 500;
    font-size: 40px;
    letter-spacing: .8px;
  }
`

export const StyledTable = styled.table`
  th {
    font-size: 2rem;
    font-family: 'Kanit';
    font-weight: 500;

    padding-right: 24px;
  }

  td {
    font-size: 1.4rem;
    text-transform: capitalize;
  }

  th, td {
    text-align: left;
  }
`

export const ImageContent = styled.div`
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
  }
`
export const GoBackBtn = styled.button`
  position: absolute;
  top: -60px;
  left: -.5px;

  background-color: ${({ theme }) => theme.colors.bg};
  color: white;

  border-radius: 2px;
  border: 1px solid white;

  height: 40px;
  width: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  box-shadow: 0px 0px 0px white;
  
  transition: box-shadow .3s;

  :hover {
    box-shadow: 0px 0px 5px white;
  }
`

export const NotFoundContent = styled.div`
  position: relative;

  padding: 20px;

  border-radius: 2px;
  border: 1px solid white;
`