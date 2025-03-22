import projects from "@Assets/projects.json";
import ProjectTile from "./ProjectTile";
import { CenteredHeader, Container, ProjectsContainer } from "./styles";
import CoverPicture from "./CoverPicture";

const Home = () => (
  <Container>
    <CoverPicture />
    <CenteredHeader>Projects</CenteredHeader>
    <ProjectsContainer>
      {projects.map((project) => (
        <ProjectTile key={project.id} project={project} />
      ))}
    </ProjectsContainer>
  </Container>
);

export default Home;
