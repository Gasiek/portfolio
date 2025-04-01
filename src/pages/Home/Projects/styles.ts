import { styled } from 'styled-components';

export const CenteredHeader = styled.h1`
  margin: 64px 0 16px;
  text-align: center;
  font-size: 64px;
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  gap: 1em;
  margin-top: 2em;
  justify-items: center;
  padding: 0 16px;  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const PlatformsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 32px;
  row-gap: 8px;
  margin: 1em 1em 0;
`;

export const PlatformLink = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.light.primary};
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.light.secondary};
  }
`;