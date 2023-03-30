import { StyledLink, StyledNavbar } from "./navbar.styles"

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink to="/">Home</StyledLink>
      |
      <StyledLink to="/favorites">Favorites</StyledLink>
    </StyledNavbar>
  )
}

export default Navbar
