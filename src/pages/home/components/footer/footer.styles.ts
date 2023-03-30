import styled from "styled-components"

export const StyledFooter = styled.footer`
  padding: 20px;
  background-color: #001725;

  @media (${({ theme }) => theme.device.xs}) {
    padding-bottom: 80px;
  }
`

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
`

export const ItemsContent = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  font-size: 1rem;
  font-weight: 600;

  a {
    display: inline-flex;
    align-items: center;
    gap: 5px;

    cursor: pointer;
    transition: color .2s;

    :hover {
      color: ${({ theme }) => theme.colors.sky_400};
    }
  }
`