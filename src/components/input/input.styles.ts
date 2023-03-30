import styled, { css } from "styled-components"

export const Container = styled.div<{ block: boolean }>`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  height: 50px;
  width: ${({ block }) => block ? '100%' : 'auto'};
`

export const StyledInput = styled.input<{ block: boolean }>`
  border-radius: 2px;
  border: 1px solid white;
  
  margin-top: auto;
  padding: 0 10px;
  
  height: 40px;
  width: ${({ block }) => block ? '100%' : 'auto'};
  
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  transition: all .3s;

  :focus:not(:disabled) {
    border: 1px solid ${({ theme }) => theme.colors.sky_500};
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  [type=number] {
    -moz-appearance: textfield;
  }
`

export const StyledLabel = styled.label<{ hasUp: boolean }>`
  margin-bottom: 4px;
  padding: 0 3.5px;
  
  position: absolute;
  top: 20.5px;
  left: 10px;
  
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  
  width: fit-content;
  transition: all .3s;

  background-color: ${({ theme }) => theme.colors.bg};

  ${({ hasUp }) => hasUp && css`
    font-size: .875rem;

    top: 0px;
    left: 7.5px;
 `}
`