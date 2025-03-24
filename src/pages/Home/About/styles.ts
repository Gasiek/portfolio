import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 64px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Description = styled.p`
  font-size: 22px;
  text-align: justify;
  max-width: 800px;
  padding: 0 32px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
