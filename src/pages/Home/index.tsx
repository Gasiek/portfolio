import projects from "@Assets/projects.json";
import ProjectTile from "./ProjectTile";
import { Container, ProjectsContainer } from "./styles";
import CoverPhoto from "./CoverPhoto";

const Home = () => (
  <Container>
    <CoverPhoto />
    <ProjectsContainer>
      {projects.map((project) => (
        <ProjectTile key={project.id} project={project} />
      ))}
    </ProjectsContainer>
  </Container>
);

export default Home;
