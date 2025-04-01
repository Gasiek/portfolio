import { styled } from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
    margin: 64px auto;
    margin-bottom: 32px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  text-align: justify;
  padding: 0 96px;
  // padding: 0 6vw;
  @media (max-width: 768px) {
    padding: 0 32px;
    font-size: 14px;
  }
`;
