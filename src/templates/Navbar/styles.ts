import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.dark.primary};
  color: ${({ theme }) => theme.colors.white};
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 100px 1fr;
  }
`;

export const Li = styled.li`
  display: grid;
  align-items: center;
  margin: 0;
  vertical-align: middle;
  text-decoration: none;
  padding: 0 32px;
  background-color: ${({ theme }) => theme.colors.dark.primary};
  height: 100%;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark.secondary};
    color: ${({ theme }) => theme.colors.light.secondary};
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.light.primary};
  font-size: 18px;
  font-weight: bold;
`;

export const NavLinkLogo = styled(NavLink)`
  height: 100px;
`;

export const Title = styled.h1`
  display: block;
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.light.primary};
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Menu = styled.ul`
  display: grid;
  justify-content: end;
  grid-template-columns: repeat(1, 180px);
  list-style: none;
  text-align: center;
  height: 100%;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${({ theme }) => theme.colors.dark.primary};
  width: 180px;
  display: none;

  ${Li}:hover & {
    display: block;
  }
`;

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropdownItem = styled(NavLink)`
  color: ${({ theme }) => theme.colors.light.primary};
  padding: 12px 16px;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark.secondary};
    color: ${({ theme }) => theme.colors.light.secondary};
  }
`;
