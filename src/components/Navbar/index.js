import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import{IconContext} from 'react-icons/lib';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import Logo from "../../images/logo.png";

const Navbar = ({ toggle }) => {
    const [scrollNav, SetScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            SetScrollNav(true);
        } else {
            SetScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <img
                                src={Logo}
                                alt="logo"
                                style={{ width: "60px" }}
                            />
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about">About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="discover">Discover</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="projects">Projects</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="signup">Sign Up</NavLinks>
                            </NavItem>
                            <NavBtn>
                                <NavBtnLink to="/signin">Sign In</NavBtnLink>
                            </NavBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
