import { Project } from '@Utils/types';
import { Tile, Overlay, Image, Title, Description } from './styles';
import { getProjectThumbnail } from '@Utils/functions';

interface ProjectTileProps {
  project: Project;
}

const ProjectTile = ({ project }: ProjectTileProps) => (
  <Tile to={`/projects/${project.id}`}>
    <Image src={getProjectThumbnail(project.id)} alt={project.title} />
    <Overlay>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
    </Overlay>
  </Tile>
);

export default ProjectTile;
