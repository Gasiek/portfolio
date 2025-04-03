import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  padding: 16px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.dark.secondary};
  color: ${({ theme }) => theme.colors.light.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  aspect-ratio: 16 / 9;
  &:hover {
    opacity: 1;
  }
`;

export const Tile = styled(Link)`
  position: relative;
  width: 100%;
  display: block;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

export const Title = styled.h2`
  margin-bottom: 8px;
`;

export const Description = styled.p`
  margin-bottom: 0;
`;
