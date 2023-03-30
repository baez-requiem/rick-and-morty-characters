import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 40px 20px;

  @media (${({ theme }) => theme.device.xs}) {
    flex-direction: column;
    align-items: end;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;

  @media (${({ theme }) => theme.device.xs}) {
    font-size: 2.75rem;
  }
`

export const FormContent = styled.form`
  position: relative;

  display: flex;
  gap: 15px;
`

export const PopoverContent = styled.div<{ show: boolean }>`
  position: absolute;
  top: 60px;
  right: 0px;
  z-index: 2;

  border-radius: 2px;
  border: 1px solid white;

  padding: 10px 17.5px 17.5px 17.5px;

  min-width: 280px;

  background-color: ${({ theme }) => theme.colors.bg};

  display: ${({ show }) => show ? 'grid' : 'none'};
  gap: 10px;
`