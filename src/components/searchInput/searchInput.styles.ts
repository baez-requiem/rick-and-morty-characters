import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 45px;
  width: 100%;

  border-radius: 2px;
  border: 1px solid white;

  overflow: hidden;
`

export const BtnSearch = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 45px;
  height: 100%;

  border: none;
  
  background-color: transparent;
  color: white;

  cursor: pointer;
  transition: all .3s;

  :hover {
    background-color: white;
    color: ${({ theme }) => theme.colors.bg};
  }
`

export const StyledInput = styled.input`
  border: none;
  background-color: ${({ theme }) => theme.colors.bg};
  color: white;
  margin: 0 15px;
  width: 100%;
`