import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #040005;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ProjectsWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 25px;
    padding: 0 20px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 480px;
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;
export const ProjectCardWrap = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 480px) {
        rid-template-columns: 1fr;
    }
`;
export const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProjectImg = styled.img`
    height: 250px;
    width: 250px;
    margin: 20px 0 20px 0;
`;

export const ProjectsH2 = styled.h2`
    color: #ef476f;
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

export const ProjectsH3 = styled.h3`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align: left;
    margin: 10px auto;
`;

export const ProjectIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProjectIconLink = styled.a`
    color: #fff;
    font-size: 30px;
    margin: 10px 15px;
`;

export const Github = styled(FaGithub)`
    color: #040005;
    &:hover {
        color: #ef476f;
    }
`;
export const ExternalLink = styled(FaExternalLinkAlt)`
    color: #040005;

    &:hover {
        color: #ef476f;
    }
`;