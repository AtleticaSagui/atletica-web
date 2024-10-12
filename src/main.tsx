import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header/index.tsx'
import Menu from './components/Menu/index.tsx'
import MainContent from './components/MainContent/index.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Icon from "./assets/img/icons/logo.png";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    font-family: "Lalezar";
  }
  
  body, #root{
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: white;
    flex-direction: column;
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
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route path='/' element={<MainContent showBackground={true}> <img src={Icon} alt='icon' height="80%"/> </MainContent>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
