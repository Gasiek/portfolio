import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 100px auto 0;
`;

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

export const TopContainer = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;

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
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;
