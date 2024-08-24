import { createGlobalStyle } from 'styled-components'

export const cores = {
  white: '#fff',
  black: '#000',
  red: '#FF0000',
  fundo: '#111',
  cinza: '#808080'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.white};
  }

  html {
    scroll-behavior: smooth;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
