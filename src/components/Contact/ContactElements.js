import styled from 'styled-components';

export const ContactContainer = styled.div`
    color: #fff;
    background: #040005;

    @media screen and (max-width: 768px) {
        padding: 1em 0;
    }
`;

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    min-height: 860px;
    max-width: 1100px;
    margin: 0 auto;
`;

export const ContactH2 = styled.h2`
    color: #ef476f;
    text-align: center;
    font-size: 48px;
    line-height: 48px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 32px;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const ContactP = styled.p`
    text-align: center;
    max-width: 440px;
    font-size: 20px;
    line-height: 30px;
`;


export const ContactIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 240px;
`;

export const ContactIconLink = styled.a`
    color: #fff;
    font-size: 50px;
    margin: 20px;
`;

