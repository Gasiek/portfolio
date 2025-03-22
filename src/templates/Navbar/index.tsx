import { Li, Menu, Nav, NavLinkLogo, StyledNavLink, Dropdown, DropdownMenu, DropdownItem } from "./styles";
import logo from "@Assets/images/gasiek-logo.svg";

const Navbar = () => {
  return (
    <Nav>
      <NavLinkLogo to="/">
        <img src={logo} height="100px" alt="logo" />
      </NavLinkLogo>
      <Menu>
        <Li>
          <StyledNavLink to="/about">About</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/#projects">Projects</StyledNavLink>
          <Dropdown>
            <DropdownMenu>
              <DropdownItem to="/projects/vr">VR</DropdownItem>
              <DropdownItem to="/projects/mobile">Mobile</DropdownItem>
              <DropdownItem to="/projects/pc">PC</DropdownItem>
              <DropdownItem to="/projects/web">Web</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Li>
      </Menu>
    </Nav>
  );
}

export default Navbar;
