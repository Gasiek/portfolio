import logo from '@Assets/images/gasiek-logo.svg';
import { To, useNavigate } from 'react-router-dom';
import { Li, Menu, Nav, NavLinkLogo, StyledNavLink, Title } from './styles';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavLinkClick = (to: To) => {
    navigate(to);

    const id = to.toString().split('?')[0];

    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav>
      <NavLinkLogo to="/">
        <img src={logo} height="100px" alt="logo" />
      </NavLinkLogo>
      <Title>
        Kacper Gasior
      </Title>
      <Menu>
        <Li>
          <StyledNavLink to="/#projects" onClick={() => handleNavLinkClick('#projects')}>
            Projects
          </StyledNavLink>
          {/* <Dropdown>
            <DropdownMenu>
              <DropdownItem to="/#projects?platform=XR" onClick={() => handleNavLinkClick('#projects?platform=XR')}>XR</DropdownItem>
              <DropdownItem to="/#projects?platform=PC" onClick={() => handleNavLinkClick('#projects?platform=PC')}>PC</DropdownItem>
              <DropdownItem to="/#projects?platform=WebGL" onClick={() => handleNavLinkClick('#projects?platform=WebGL')}>WebGL</DropdownItem>
              <DropdownItem to="/#projects?platform=Android" onClick={() => handleNavLinkClick('#projects?platform=Android')}>Android</DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
        </Li>
      </Menu>
    </Nav>
  );
};

export default Navbar;
