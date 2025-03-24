import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
`;

export const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8em 0 2em;
  padding: 4em 2em 0;
  min-height: 40vh;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2em;
  }
`;

export const InfoLeft = styled.div`
  flex: 1;
`;

export const Technologies = styled.div`
  display: flex;
  gap: 1em;
`;

export const Technology = styled.span`
  color: ${({ theme }) => theme.colors.light.primary};
`;

export const InfoRight = styled.div`
  flex: 2;
  text-align: justify;
`;

export const TilesContainer = styled.div`
  padding: 2em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const VideoTile = styled.video`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 12px;
`;

export const ImageTile = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 12px;
`;

export const LinkTile = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 48px;
  background-color: ${({ theme }) => theme.colors.light.primary};
  color: ${({ theme }) => theme.colors.dark.secondary};
  font-weight: bold;
  text-decoration: none;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
`;
