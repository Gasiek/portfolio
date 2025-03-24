import { styled } from 'styled-components';

export const Container = styled.div<{ bgimage: string }>`
  height: calc(100vh - 100px);
  background-image: url(${(props) => props.bgimage});
  background-size: cover;
  transition: background-image 1s ease-in-out; // Smooth transition effect
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 100px;
  @media (max-width: 768px) {
    background-position-x: 45%;
  }
`;
