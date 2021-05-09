import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectsContainer = styled.div`
    height: 860px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #040005;

    @media screen and (max-width: 768px) {
        height: auto;
    }
    @media screen and (max-width: 480px) {
        height: auto;
    }
`;

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 100%;
    width: auto;
    max-height: 350px;
    padding: 10px 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ProjectsImg = styled.img`
    height: 180px;
    width: 350px;
    margin: 10px;

    @media screen and (max-width: 768px) {
        height: 150px;
        width: 250px;
    }
`;

export const ProjectsH1 = styled.h2`
    margin: 3rem auto;
    color: #ef476f;
    font-size: 48px;
    line-height: 48px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;

    @media screen and (max-width: 480px) {
        margin: 2rem auto;
        font-size: 32px;
    }
`;

export const ProjectsH2 = styled.h2`
    font-size: 1rem;
    margin: 10px;
`;

export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align: center;
`;
export const ProjectIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProjectIconLink = styled.a`
    color: #fff;
    font-size: 30px;
    margin: 10px 15px 0 15px;
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