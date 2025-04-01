import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8em 0 2em;
  padding: 4em 2em 0;
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
`;

export const RowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1em;
  margin-bottom: 2em;
`;

export const TechnicalDescriptionContainer = styled.div`
  margin: 2em 0;
  padding: 0 4em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  @media (max-width: 768px) {
    padding: 0;
  }
  p {
    text-align: justify;
    line-height: 1.6;
  }
  ul {
    margin-top: 1em;
    margin-left: 3em;
    list-style-type: disc;
    margin-bottom: 1em;
    max-width: 600px;
    li {
      margin-bottom: 0.6em;
      text-align: justify;
    }
  }
  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
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

export const Tools = styled.p`
  color: ${({ theme }) => theme.colors.light.primary};
  font-weight: bold;
  font-size: 18px;
`;
