import { useParams } from 'react-router-dom';
import projects from '@Assets/projects.json';
import { ProjectInfo, InfoLeft, InfoRight, Container, Technologies, Technology, TilesContainer, LinkTile, ImageTile, VideoTile } from './styles';
import { getProjectGifs, getProjectImages, getProjectVideo } from '@Utils/functions';

const arrangeMediaAlternately = (images: string[], gifs: string[]): string[] => {
  let media: string[] = [];
  let maxLength = Math.max(images.length, gifs.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < images.length) media.push(images[i]);
    if (i < gifs.length) media.push(gifs[i]);    
  }

  return media;
};

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) return <h2>Project not found</h2>;

  const images = getProjectImages(project.id);
  const gifs = getProjectGifs(project.id);
  const media = arrangeMediaAlternately(images, gifs);

  return (
    <Container>
      <ProjectInfo>
        <InfoLeft>
          <h1>{project.title}</h1>
          <Technologies>
            {project.technologies.map((tech: string) => (
              <Technology key={tech}>{tech}</Technology>
            ))}
          </Technologies>
        </InfoLeft>
        <InfoRight>
          <p>{project.detailedDescription}</p>
        </InfoRight>
      </ProjectInfo>
      <TilesContainer>
        {getProjectVideo(project.id) && <VideoTile src={getProjectVideo(project.id)} />}
        {project.gameLink && <LinkTile to={project.gameLink}>Play now!</LinkTile>}
        {media.map((mediaPath: string, index: number) => (
          <ImageTile key={index} src={mediaPath} alt={project.title} />
        ))}
      </TilesContainer>
    </Container>
  );
};

export default ProjectPage;
