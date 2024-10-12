import React from "react";
import Background from "./../../assets/img/backgrounds/background.png";

import styled from "styled-components";

interface MainContainerProps {
    hasBackground: boolean;
    children: React.ReactNode;
}

const MainContainer = styled.main<MainContainerProps>`
    position: relative;
    display: flex;
    width: 100%;
    flex: 1;
    background-image: ${({ hasBackground }) =>
        hasBackground ? `url(${Background})` : "none"};    
    background-size: cover;
    background-position: center;
    align-items: center;
    justify-content: center;
`;

function MainContent({showBackground, children}) {
    return (
        <MainContainer hasBackground={showBackground}>
            {children}
        </MainContainer>
    )
    
}

export default MainContent;