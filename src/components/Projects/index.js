import React from 'react';
import {
    ProjectsContainer,
    ProjectsH2,
    ProjectsWrapper,
} from "./ProjectsElements";
import {
    projectObjOne,
    projectObjTwo,
    projectObjThree,
    projectObjFour,
} from "./ProjectsData";
import ProjectCard from './ProjectCard';


const Projects = () => {
    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsH2>Projects</ProjectsH2>
                <ProjectsWrapper>
                    <ProjectCard projectObj={projectObjOne} />
                    <ProjectCard projectObj={projectObjTwo} />
                    <ProjectCard projectObj={projectObjThree} />
                    <ProjectCard projectObj={projectObjFour} />
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    );
}

export default Projects
