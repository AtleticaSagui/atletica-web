import styled from "styled-components";

import Logo from "./../../assets/img/logo.png";
import DiscordIcon from "./../../assets/img/discordIcon.svg";
import InstagramIcon from "./../../assets/img/instagramIcon.svg";
import WhatsappIcon from "./../../assets/img/whatsappIcon.svg";

const icons = [DiscordIcon, InstagramIcon, WhatsappIcon];

const HeaderContainer = styled.header`
    position: relative;
    display: flex;
    width: 100%;
    height: 15%;
    max-height: 120px;
    min-height: 70px;
    background-color: var(--yellow);
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`;

const HeaderIcon = styled.img`
    position: relative;
    height: 80%;
`;

const HeaderSocialMedia = styled.div`
    position: relative;
    display: flex;
    height: 30%;
    gap: 10px;
`;

const Redirect = styled.a`
    display: flex;
    height: 100%;
`

const SocialMediaIcon = styled.img`
    position: relative;
    height: 100%;
`

function Header(){
    return (
        <HeaderContainer>
            <HeaderIcon src={Logo} alt="logo" />
            <HeaderSocialMedia>
                {
                    icons.map((icon) => (
                        <Redirect href="#">
                            <SocialMediaIcon src={icon} alt="social-media-icon" />
                        </Redirect>
                    ))
                }
            </HeaderSocialMedia>
        </HeaderContainer>
    )
}

export default Header;
