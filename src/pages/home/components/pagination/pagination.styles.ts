import styled from "styled-components"

export const Container = styled.div<{ show: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 0px;

  padding-right: 20px;

  display: ${({ show }) => show ? 'grid' : 'none'};
  grid-template-columns: 1fr 1fr;
  width: calc(50% + 67.5px);
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  opacity: .5;
  transition: opacity .3s;

  :hover {
    opacity: .9;
  }

  button:first-child {
    border-right: none;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  button:last-child {
    border-left: none;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`

export const Page = styled.div`
  border-top: 1px solid white;
  border-bottom: 1px solid white;

  width: 45px;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: #001725;
`

export const BtnToUpContent = styled.div`
  display: flex;
  justify-content: end;

  opacity: .5;
  transition: opacity .3s;

  :hover {
    opacity: .9;
  }
`

export const StyledBtn = styled.button`
  background-color: #001725;
  color: white;

  border: 1px solid white;
  border-radius: 2px;

  height: 45px;
  width: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: filter .3s;

  :hover {
   filter: brightness(2);
  }

  :disabled {
    cursor: default;
    pointer-events: none;

    background-color: #ccc2;
    border: 1px solid #ccc9;
    color: #ccc9;
  }
`