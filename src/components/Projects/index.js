import React from 'react';
import {
    ProjectsContainer,
    ProjectsH2,
    ProjectsWrapper,
} from "./ProjectsElements";
import { projectObjOne } from "./ProjectsData";
import ProjectCard from './ProjectCard';


const Projects = () => {
    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsH2>Projects</ProjectsH2>
                <ProjectsWrapper>
                    <ProjectCard projectObj={projectObjOne} />
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    );
}

export default Projects
