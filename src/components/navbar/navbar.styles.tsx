import styled from "styled-components"

import { Link } from "react-router-dom"

export const StyledNavbar = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;

  position: relative;
  z-index: 2;

  padding: 20px;
  width: 100vw;

  background-color: #0009;

  transition: background-color .3s;

  text-transform: uppercase;
  letter-spacing: 1px;

  :hover {
    background-color: #000;
  }
`

export const StyledLink = styled(Link)`
:not(:disabled) {
  cursor: pointer;

  transition: color .3s;

  :hover {
    color: ${({ theme }) => theme.colors.sky_500};
  }
  }
`