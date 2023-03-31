import styled from "styled-components"

export const Container = styled.div``

export const CharactersContent = styled.div`
  display: grid;
  align-items: center;
  gap: 20px;
  
  padding-top: 20px;

  @media (${({ theme }) => theme.device.xl}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  @media (${({ theme }) => theme.device.lg}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (${({ theme }) => theme.device.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (${({ theme }) => theme.device.sm}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (${({ theme }) => theme.device.xs}) {
    grid-template-columns: 1fr;

    > div {
      margin: 0 auto;
    }
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;

  @media (${({ theme }) => theme.device.xs}) {
    font-size: 2rem;
    text-align: center;
  }
`

export const Content = styled.div`
  padding: 20px;
`

export const LoaderContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 40px;
`

export const BtnToUp = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 3;

  border: 1px solid white;
  border-radius: 2px;

  height: 45px;
  width: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: .3;
  cursor: pointer;
  color: white;
  transition: opacity .3s;
  background-color: ${({ theme }) => theme.colors.bg};

  :hover {
    opacity: .7;
  }
`