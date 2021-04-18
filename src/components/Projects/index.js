import React from 'react';
import {
    ProjectsContainer,
    ProjectsH2,
    ProjectsWrapper,
    ProjectsCard,
    ProjectImg,
    ProjectsH3,
    ProjectsP,
    ProjectIcons,
    ProjectIconLink,
    Github,
    ExternalLink,
} from "./ProjectsElements";
import { projectOne } from "./ProjectsData";


const Projects = () => {
    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsH2>Projects</ProjectsH2>
                <ProjectsWrapper>
                    <ProjectsCard>
                        <ProjectImg
                            src={projectOne.img}
                            alt={projectOne.name}
                        />
                        <ProjectsH3>{projectOne.name}</ProjectsH3>
                        <ProjectsP>{projectOne.description}</ProjectsP>
                        <ProjectIcons>
                            <ProjectIconLink
                                href={projectOne.externalLink}
                                target="_blank"
                                aria-label={`${projectOne.name} external`}
                            >
                                <ExternalLink />
                            </ProjectIconLink>
                            <ProjectIconLink
                                href={projectOne.githubLink}
                                target="_blank"
                                aria-label={`${projectOne.name} github`}
                            >
                                <Github />
                            </ProjectIconLink>
                        </ProjectIcons>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    );
}

export default Projects
