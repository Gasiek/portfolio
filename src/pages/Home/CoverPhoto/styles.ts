import { styled } from "styled-components";

export const Container = styled.div<{ bgimage: string }>`
  height: calc(100vh);
  background-image: url(${(props) => props.bgimage});
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out; // Smooth transition effect
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;