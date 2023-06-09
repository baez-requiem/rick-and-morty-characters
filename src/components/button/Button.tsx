import styled, { css } from "styled-components"

import { ColorsType } from "src/theme/theme"

export interface ButtonProps {
  color?: ColorsType
  variant?: 'outlined' | 'default'
  block?: boolean
}

const Button = styled.button.attrs({
  "data-testid": "button"
})<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0px 15px;

  border-radius: 2px;
  border: none;

  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all .2s;

  height: 40px;
  width: ${({ block }) => block ? '100%' : 'unset'};

  :hover {
    filter: brightness(.8);
    box-shadow: 0px 0px 5px 5px ${({ theme, color }) => color ? theme.colors[color] + 20 : 'transparent'};
  }

  ${({ variant, theme, color }) => variant === 'outlined' ? css`
    background-color: transparent;
    color: ${color ? theme.colors[color] : theme.colors.text};
    border: 1px solid ${color ? theme.colors[color] : theme.colors.text};
  ` : css`
    background-color: ${color ? theme.colors[color] : 'transparent'};
    color: #fff;
  `}
`

export default Button