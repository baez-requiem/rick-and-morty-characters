import styled, { css } from "styled-components"

import { ColorsType } from "src/theme/theme"

const IconButton = styled.button<{
  color?: ColorsType,
  size?: number,
  variant?: 'outlined' | 'default'
}>`
  height: ${({ size = 30 }) => size}px;
  width: ${({ size = 30 }) => size}px;

  min-height: ${({ size = 30 }) => size}px;
  min-width: ${({ size = 30 }) => size}px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 2px;

  ${({ variant, theme, color }) => variant === 'outlined' ? css`
    background-color: transparent;
    color: ${color ? theme.colors[color] : theme.colors.text};
    border: 1px solid ${color ? theme.colors[color] : theme.colors.text};
  ` : css`
    background-color: ${color ? theme.colors[color] : 'transparent'};
    color: #fff;
    border: none;
  `}

  :disabled {
    pointer-events: none;
  }

  :not([disabled]) {
    cursor: pointer;
    transition: all .2s;
  
    :hover{
      filter: brightness(.8);
      box-shadow: 0px 0px 5px 5px ${({ theme, color }) => theme.colors[color || 'gray_800']}20;
    }
  }

`

export default IconButton