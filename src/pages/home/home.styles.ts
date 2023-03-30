import styled from "styled-components"

export const Container = styled.div``

export const CharactersContent = styled.div`
  display: grid;
  align-items: center;
  gap: 20px;
  
  padding: 0 20px 20px 20px;

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

export const LoaderContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 40px;
`