import { createGlobalStyle } from 'styled-components'
import theme from './../styles/themes/dark'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    scroll-padding: 80px;
    scroll-behavior: smooth;
  }
  
  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    scroll-behavior: smooth;
    overflow-x: hidden;   
  }

  body::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
  }
 
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.5);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 5px;
    outline: 1px solid slategrey;
  }
`
