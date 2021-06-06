import React from "react";
import {
    ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
} from "./ProjectsElements";
import ProjectCard from "./ProjectCard";
import {
    projectObjOne,
    projectObjTwo,
    projectObjThree,
    projectObjFour,
    projectObjFive,
    projectObjSix,
    projectObjSeven,
} from "./ProjectsData";

const Projects = () => {
    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsH1>Projects</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectCard projectObj={projectObjSeven} />
                    <ProjectCard projectObj={projectObjSix} />
                    <ProjectCard projectObj={projectObjFive} />
                    <ProjectCard projectObj={projectObjOne} />
                    <ProjectCard projectObj={projectObjTwo} />
                    <ProjectCard projectObj={projectObjThree} />
                    <ProjectCard projectObj={projectObjFour} />
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    );
};

export default Projects;
