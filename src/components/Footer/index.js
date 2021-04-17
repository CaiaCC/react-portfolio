import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Logo from '../../images/logo.png'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements.js";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <img src={Logo} alt="logo" style={{ width: "60px" }} />
                        </SocialLogo>
                        <WebsiteRights>
                            Caia Chuang © {new Date().getFullYear()} All rights
                            reserved.{" "}
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
                                <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer
