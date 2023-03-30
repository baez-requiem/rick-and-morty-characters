import styled, { css, keyframes } from "styled-components"

const portalImg = '/portal.png'
const logoImg = '/logo.png'
const backgroundImg = '/background.jpg'

const PortalAnimation = (n = 0) => keyframes`
  100% { transform: rotate(${360 + n}deg); }
`

export const HeroContainer = styled.div`
  position: relative;
  height: 600px;
`

export const ContainerBackground = styled.div`
  position: absolute;
  height: 600px;
  width: 100%;
  background-color: #152238;
  background-image: url(${backgroundImg});
  background-size: cover;
  filter: blur(2px) grayscale(40%);
`

export const BottomGradient = styled.div`
  position: absolute;
  height: 100px;
  width: 100%;

  bottom: 0;

  background-image: linear-gradient(transparent, #152238);
`

export const PortalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  height: calc(100%);
`

interface PortalImgProps {
  opacity?: number
  rotate?: number
  seconds?: number
}

export const PortalImg = styled.img.attrs({
  src: portalImg
})<PortalImgProps>`
  position: absolute;
  max-width: 500px;
  width: 90%;

  ${({ opacity = 1, rotate = 0, seconds = 21 }) => css`
    opacity: ${opacity};

    animation: ${PortalAnimation(rotate)} ${seconds}s infinite linear;
    transform: rotate(${rotate}deg);
  `}
`

export const PortalBackground = styled.div`
  height: calc(60vw);
  width: calc(60vw);

  max-width: 380px;
  max-height: 380px;

  background-color: #78ff39;
  box-shadow: 0px 0px 30px 50px #78ff39;

  border-radius: 50%;
`

export const LogoImg = styled.img.attrs({
  src: logoImg
})`
  position: absolute;
  max-width: 700px;
  width: 90%;
  filter: drop-shadow(5px 5px 5px #222);
`