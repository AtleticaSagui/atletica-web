import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header/index.tsx'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }
  
  body, #root{
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: white;
  }

  :root{
    --yellow: #E5D00F;
    --darker-yellow: #2F2A00;
    --dark-yellow: #B0B400;
    --light-yellow: #FDFFAE;

    --black: #000;
    --dark-gray: #333333;
    --gray: #7D7D7D;
    --medium-gray: #DDDDDD;
    --light-gray: #F5F5F5;
  }
`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <Header />
    <App />
  </StrictMode>,
)
