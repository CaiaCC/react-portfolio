import React from 'react';
import {
    ProjectsCard,
    ProjectImg,
    ProjectCardWrap,
    ProjectContent,
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
                <ProjectCardWrap>
                    <ProjectImg src={img} alt={name} />
                    <ProjectContent>
                        <ProjectsH3>{name}</ProjectsH3>
                        <ProjectsP>{description}</ProjectsP>
                        <ProjectIcons>
                            {externalLink && (
                                <ProjectIconLink
                                    href={externalLink}
                                    target="_blank"
                                    aria-label={`${name} external link.`}
                                >
                                    <ExternalLink />
                                </ProjectIconLink>
                            )}
                            {githubLink && (
                                <ProjectIconLink
                                    href={githubLink}
                                    target="_blank"
                                    aria-label={`${name} github link.`}
                                >
                                    <Github />
                                </ProjectIconLink>
                            )}
                        </ProjectIcons>
                    </ProjectContent>
                </ProjectCardWrap>
            </ProjectsCard>
        </>
    );
}

export default ProjectCard;
