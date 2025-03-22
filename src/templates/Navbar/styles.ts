import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.dark.primary};
  color: ${({ theme }) => theme.colors.white};
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Li = styled.li`
  display: grid;
  align-items: center;
  margin: 0;
  vertical-align: middle;
  text-decoration: none;
  padding: 0 64px;
  background-color: ${({ theme }) => theme.colors.dark.primary};
  height: 100%;
  position: relative; /* Required for dropdown */
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.dark.secondary};
    color: ${({ theme }) => theme.colors.light.secondary};
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.light.primary};
  font-size: 22px;
  font-weight: 400;
`;

export const NavLinkLogo = styled(NavLink)`
  height: 100px;
`;

export const Menu = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, auto);
  list-style: none;
  text-align: center;
  height: 100%;
  align-items: center;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%; /* Position the dropdown below the "Projects" link */
  left: 0;
  background-color: ${({ theme }) => theme.colors.dark.primary};
  width: 200px;
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
