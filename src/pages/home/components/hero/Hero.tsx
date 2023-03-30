import {
  LogoImg,
  HeroContainer,
  PortalImg,
  BottomGradient,
  PortalContainer,
  PortalBackground,
  ContainerBackground,
} from "./hero.styles"

const Hero = () => {

  return (
    <HeroContainer>
      <ContainerBackground>
        <BottomGradient />
      </ContainerBackground>
      <PortalContainer>
        <PortalBackground />
        
        <PortalImg opacity={.2} seconds={10.5} />
        <PortalImg opacity={.8} />
        <PortalImg opacity={.6} rotate={300} />
        <PortalImg opacity={.4} rotate={170} />
        <PortalImg opacity={.2} rotate={100} />
      
        <LogoImg />
      </PortalContainer>
    </HeroContainer>
  )
}

export default Hero