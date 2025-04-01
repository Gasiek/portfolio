import { getProjectThumbnail } from '@Utils/functions';
import { Project } from '@Utils/types';
import { Description, Image, Overlay, Tile, Title } from './styles';

interface ProjectTileProps {
  project: Project;
}

const ProjectTile = ({ project }: ProjectTileProps) => (
  <Tile to={`/projects/${project.id}`}>
    <Image src={getProjectThumbnail(project.id)} alt={project.title} />
    <Overlay>
      <Title>{project.title}</Title>
      <Description>{project.thumbnailDescription}</Description>
    </Overlay>
  </Tile>
);

export default ProjectTile;
