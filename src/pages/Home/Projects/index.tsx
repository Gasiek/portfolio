import projectsData from '@Assets/projects.json';
import { useEffect, useState } from 'react';
import ProjectTile from './ProjectTile';
import { CenteredHeader, PlatformLink, PlatformsContainer, ProjectsContainer } from './styles';

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
const [platform, setPlatform] = useState<string>("All");

useEffect(() => {
  setProjects(
    projectsData.filter((project) => {
      if (platform === "All") {
        return true;
      }
      return project.platform.includes(platform);
    })
  );
}, [platform]);

  return (
    <>
      <CenteredHeader id="projects">Projects</CenteredHeader>
      <PlatformsContainer>
        <PlatformLink onClick={()=>setPlatform("All")}>All</PlatformLink>
        <PlatformLink onClick={()=>setPlatform("PC")}>PC</PlatformLink>
        <PlatformLink onClick={()=>setPlatform("XR")}>XR</PlatformLink>
        <PlatformLink onClick={()=>setPlatform("WebGL")}>WebGL</PlatformLink>
        <PlatformLink onClick={()=>setPlatform("Mobile")}>Mobile</PlatformLink>
        <PlatformLink onClick={()=>setPlatform("Other")}>Other</PlatformLink>
      </PlatformsContainer>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
      </ProjectsContainer>
    </>
  );
};

export default Projects;
