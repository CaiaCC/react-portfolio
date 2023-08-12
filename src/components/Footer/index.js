import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GoMail } from "react-icons/go";
import {
    Logo,
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    FooterLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements.js";
import CaiaLogo from "../../images/logo.png";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <FooterLogo to="/" onClick={toggleHome}>
                            <Logo src={CaiaLogo} alt="logo" />
                        </FooterLogo>
                        <WebsiteRights>
                            {/* {new Date().getFullYear()} */}
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href="//www.linkedin.com/in/caiachuang/"
                                target="_blank"
                                aria-label="Linkedin"
                            >
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//github.com/CaiaCC"
                                target="_blank"
                                aria-label="Github"
                            >
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink
                                href="mailto:caiachuang.gmail.com"
                                target="_blank"
                                aria-label="email"
                            >
                                <GoMail />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer
