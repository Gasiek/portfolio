import { styled } from 'styled-components';

export const Container = styled.div<{ bgimage: string }>`
  height: calc(100vh - 100px);
  background-image: url(${(props) => props.bgimage});
  background-size: cover;
  background-position-x: right;
`;
