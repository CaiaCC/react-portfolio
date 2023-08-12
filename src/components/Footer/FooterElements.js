import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    background-color: #0a0216;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    justify-content: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 10px auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    width: 60px;

    &:hover {
        transform: scale(1.15);
        transition: all 0.2s ease-in-out;
    }
`;

export const WebsiteRights = styled.small`
    color: #fff;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 240px
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 30px;
    margin: 10px;
`;
