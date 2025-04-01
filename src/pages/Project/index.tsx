import projects from '@Assets/projects.json';
import { getProjectGifs, getProjectImages } from '@Utils/functions';
import { useParams } from 'react-router-dom';
import {
  Container,
  ImageTile,
  InfoLeft,
  InfoRight,
  LinkTile,
  ProjectInfo,
  RowContainer,
  TechnicalDescriptionContainer,
  Technologies,
  Technology,
  TilesContainer,
  Tools,
  Wrapper,
} from './styles';

const arrangeMediaAlternately = (images: string[], gifs: string[]): string[] => {
  let media: string[] = [];
  const maxLength = Math.max(images.length, gifs.length);

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

  const firstRowImageCount = project.gameLink ? 2 : 3;
  const firstRowMedia = media.slice(0, firstRowImageCount);
  const remainingMedia = media.slice(firstRowImageCount);

  return (
    <Container>
      <Wrapper>
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
            <p>{project.projectDescription}</p>
          </InfoRight>
        </ProjectInfo>

        <TilesContainer>
          <RowContainer>
            {project.gameLink && (
              <LinkTile target="_blank" to={project.gameLink}>
                Play now!
              </LinkTile>
            )}
            {firstRowMedia.map((mediaPath: string, index: number) => (
              <ImageTile key={index} src={mediaPath} alt={project.title} />
            ))}
          </RowContainer>

          <TechnicalDescriptionContainer>
            <div>
              <p>{project.technicalDescription.descriptionText}</p>
              <ul>
                {project.technicalDescription.bulletPoints.map((point: string, index: number) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <p>
              <strong>Results:</strong> {project.technicalDescription.results}
            </p>
            <Tools>
              <strong>Tools/Skills:</strong> {project.technicalDescription.tools.join(' | ')}
            </Tools>
          </TechnicalDescriptionContainer>

          <RowContainer>
            {remainingMedia.map((mediaPath: string, index: number) => (
              <ImageTile key={index} src={mediaPath} alt={project.title} />
            ))}
          </RowContainer>
        </TilesContainer>
      </Wrapper>
    </Container>
  );
};

export default ProjectPage;
