import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: #040005;

    @media screen and (max-width: 768px) {
        padding: 10em 0 1em 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    min-height: 860px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) =>
        (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
            (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 550px;
`;

export const TopLine = styled.h2`
    color: #ef476f;
    font-size: 48px;
    line-height: 48px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 32px;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Paragraph = styled.p`
    max-width: 550px;
    margin-bottom: 25px;
    font-size: 20px;
    line-height: 30px;
    color: ${({ darkText }) => (darkText ? "#040005" : "#fff")};
`;

export const StackIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 2.5rem;
`;

export const ImgWrap = styled.div`
    max-width: 550px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 50px;

    @media screen and (max-width: 768px) {
        padding: 20px;
    }
`;