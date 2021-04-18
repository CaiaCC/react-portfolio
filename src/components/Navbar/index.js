import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import Resume from '../../doc/Resume-CaiaChuang.pdf';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    Logo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import CaiaLogo from "../../images/logo.png";

const Navbar = ({ toggle }) => {
    const [scrollNav, SetScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            SetScrollNav(true);
        } else {
            SetScrollNav(false);
        }
    };

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            <Logo
                                src={CaiaLogo}
                                alt="logo"
                            />
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="projects"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    Projects
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    Contact
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                            <NavBtn>
                                <NavBtnLink href={Resume} target="_blank">
                                    Resume
                                </NavBtnLink>
                            </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
