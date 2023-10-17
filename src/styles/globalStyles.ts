import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
  }
  
  body {
    background-color: ${(props: { theme: { colors: { background: any } } }) =>
      props.theme.colors.background};
    color: ${(props: { theme: { colors: { text: any } } }) =>
      props.theme.colors.text};
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    scroll-behavior: smooth;
    overflow-x: hidden;   
  }

  body::-webkit-scrollbar {
    width: 7px;
    border-radius: 5px;
  }
 
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 5px;
    outline: 1px solid slategrey;
  }
`
