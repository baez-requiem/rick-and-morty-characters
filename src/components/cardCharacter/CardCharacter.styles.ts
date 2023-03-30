import styled, { css } from "styled-components"

export const Container = styled.div`
  position: relative;
  top: 0px;

  border-radius: 1.5px;
  
  height: 100%;
  width: 100%;

  max-width: 300px;
  min-width: 220px;

  max-height: 300px;
  min-height: 220px;

  overflow: hidden;
  background-color: #0009;

  box-shadow: 2px 2px 6px #fff2;

  font-weight: 600;
  letter-spacing: .8px;

  transition: all .3s;
  cursor: pointer;

  :hover {
    box-shadow: 6px 6px 6px #fff1;
    top: -2.5px;
  }
`

export const ImageContent = styled.div`
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
  }
`

export const NameContent = styled.div`
  width: 100%;
  height: 50px;

  background-color: #0007;
  color: white;

  text-align: center;

  font-size: 0.75rem;
  font-family: 'Kanit', sans-serif;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0px;
  left: 0px;
`

export const BtnContent = styled.div<{ isFavorite: boolean }>`
  position: absolute;
  top: 0px;
  right: 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 45px;
  width: 45px;

  border-bottom-left-radius: 2.5px;

  background-color: #0007;

  transition: all .3s;
  
  ${({ isFavorite, theme }) => isFavorite ? css`
    color: ${theme.colors.amber_500};

    :hover {
      color: ${theme.colors.gray_400};
    }
  ` : css`
    color: ${theme.colors.gray_400};

    :hover {
      color: ${theme.colors.amber_500};
    }
  `}
`