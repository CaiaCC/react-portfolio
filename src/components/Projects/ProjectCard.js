import React from "react";
import {
    ProjectsCard,
    ProjectsImg,
    ProjectsH2,
    ProjectsP,
    ProjectIcons,
    ProjectIconLink,
    Github,
    ExternalLink,
} from "./ProjectsElements";

const ProjectCard = ({ projectObj }) => {
    const { img, name, p, externalL, githubL } = projectObj;

    return (
        <>
            <ProjectsCard>
                <ProjectsImg src={img} alt={name} />
                <ProjectsH2>{name}</ProjectsH2>
                {/* <ProjectsP>{p}</ProjectsP> */}
                <ProjectIcons>
                    {externalL && (
                        <ProjectIconLink
                            href={externalL}
                            target="_blank"
                            aria-label={`${name} Demo`}
                        >
                            <ExternalLink />
                        </ProjectIconLink>
                    )}
                    {githubL && (
                        <ProjectIconLink
                            href={githubL}
                            target="_blank"
                            aria-label={`${name} Github`}
                        >
                            <Github />
                        </ProjectIconLink>
                    )}
                </ProjectIcons>
            </ProjectsCard>
        </>
    );
};

export default ProjectCard;
