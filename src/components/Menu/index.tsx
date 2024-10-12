import styled from "styled-components";

const guestOptions = ["HOME", "CALENDARIO", "TIMES", "ENTRAR", "REGISTRAR"];
const userOptions = ["HOME", "CALENDARIO", "TIMES", "MINHA CONTA", "SAIR"];

const MenuContainer = styled.nav`
    position: relative;
    width: 100%;
    height: 8%;
    min-height: 44px;
    max-height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    background-color: var(--darker-yellow);
`;

const MenuOption = styled.li`
    position: relative;
    font-size: 2rem;
    list-style: none;
    color: white;
    cursor: pointer;
`;

function Menu(){
    return (
        <MenuContainer>
            {
                guestOptions.map((option) => (
                    <MenuOption> {option} </MenuOption>
                ))
            }
        </MenuContainer>
    )
}

export default Menu;