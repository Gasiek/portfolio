import { styled } from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  text-align: center;
`;
