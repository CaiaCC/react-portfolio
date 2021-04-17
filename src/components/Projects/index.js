import React from 'react';
import {
    ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsIcon,
    ProjectsH2,
    ProjectsP,
} from "./ProjectsElements";

const Projects = () => {
    return (
        <>
            <ProjectsContainer id='projects'>
                <ProjectsH1>Projects</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectsCard>
                        <ProjectsIcon src={Icon1}/>
                        <ProjectsH2>Project1 Name</ProjectsH2>
                        <ProjectsP>Short introduction for the project(intro & stack) might need to add a section for stack and buttons for links(hosted site and github repository)</ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsIcon src={Icon2}/>
                        <ProjectsH2>Project2 Name</ProjectsH2>
                        <ProjectsP>Short introduction for the project(intro & stack) might need to add a section for stack and buttons for links(hosted site and github repository)</ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsIcon src={Icon3}/>
                        <ProjectsH2>Project3 Name</ProjectsH2>
                        <ProjectsP>Short introduction for the project(intro & stack) might need to add a section for stack and buttons for links(hosted site and github repository)</ProjectsP>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    )
}

export default Projects
