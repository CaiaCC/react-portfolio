import React from 'react';
import {
    ProjectsCard,
    ProjectImg,
    ProjectsH3,
    ProjectsP,
    ProjectIcons,
    ProjectIconLink,
    Github,
    ExternalLink,
} from "./ProjectsElements";

const ProjectCard = ({projectObj}) => {
    const { img, name, description, externalLink, githubLink } = projectObj;

    return (
        <>
            <ProjectsCard>
                <ProjectImg src={img} alt={name} />
                <ProjectsH3>{name}</ProjectsH3>
                <ProjectsP>{description}</ProjectsP>
                <ProjectIcons>
                    <ProjectIconLink
                        href={externalLink}
                        target="_blank"
                        aria-label={`${name} external link.`}
                    >
                        <ExternalLink />
                    </ProjectIconLink>
                    <ProjectIconLink
                        href={githubLink}
                        target="_blank"
                        aria-label={`${name} github link.`}
                    >
                        <Github />
                    </ProjectIconLink>
                </ProjectIcons>
            </ProjectsCard>
        </>
    );
}

export default ProjectCard;
