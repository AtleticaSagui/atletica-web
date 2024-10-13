import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header/index.tsx'
import Menu from './components/Menu/index.tsx'
import MainContent from './components/MainContent/index.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Icon from "./assets/img/icons/logo.png";
import Table from './components/Table/index.tsx'

const columnsList = ["DATA", "HORA", "EVENTO"];
const dataList = [
  ["10/01/2024", "10h00", "Inscricoes"],
  ["14/02/2024", "14h30", "Fim das inscricoes"],
  ["16/03/2024", "09h00", "Chaveamento"],
  ["12/04/2024", "10h00", "1Jogo Clash"],
  ["12/04/2024", "11h00", "2Jogo Clash"]
];

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
        <Route path='/' element={<MainContent hasBackground={true}> <img src={Icon} alt='icon' height="450px"/> </MainContent>} />
        
        <Route path='/calendar' element={<MainContent hasBackground={false}> <Table columnsList={columnsList} dataList={dataList} /> </MainContent>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
