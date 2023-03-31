import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    user-select: none;

    font-family: 'IBM Plex Mono', monospace;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body, #root {
    min-width: 320px;
    min-height: 100vh;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Kanit', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 7.5px;
    height: 7.5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #999;
  }

  textarea:focus, select:focus, input:focus{
    outline: none;
  }

  a {
    all: unset;
  }

  @media (max-width: 1080px) {
    html { font-size: 93.75%; }
  }

  @media (max-width: 720px) {
    html { font-size: 87.5%; }

    ::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }
`;
