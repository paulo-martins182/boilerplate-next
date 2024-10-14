'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    scroll-behavior: smooth;

::-webkit-scrollbar {
  height: 8px;
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.09);
  border-radius: 5px;
}

::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.05);
}


  }
  html {
    font-size: 62.5%; 
  }

  body {
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

 


`

export default GlobalStyles
