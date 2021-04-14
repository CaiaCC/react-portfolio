import React from 'react';
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from "./NavbarElements";
import Logo from '../../images/logo.png';

const Navbar = () => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to="/">
                      <img src={Logo} alt="logo" style={{width:'80px'}}/>
                  </NavLogo>
                  
              </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar;
