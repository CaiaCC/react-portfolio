import React from 'react';
import {
    ContactContainer,
    ContactWrapper,
    ContactH2,
    ContactP,
    ContactIcons,
    ContactIconLink,
} from "./ContactElements";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Contact = () => {
    return (
        <>
            <ContactContainer id="contact">
                <ContactWrapper>
                    <ContactH2>Get In Touch</ContactH2>
                    {/* <ContactP>You can connect with me here</ContactP> */}
                    <ContactIcons>
                        <ContactIconLink
                            href="//www.linkedin.com/in/caiachuang/"
                            target="_blank"
                            aria-label="Linkedin"
                        >
                            <FaLinkedin />
                        </ContactIconLink>
                        <ContactIconLink
                            href="//github.com/CaiaCC"
                            target="_blank"
                            aria-label="Github"
                        >
                            <FaGithub />
                        </ContactIconLink>
                        <ContactIconLink
                            href="mailto:caiachuang.gmail.com"
                            target="_blank"
                            aria-label="email"
                        >
                            <GoMail />
                        </ContactIconLink>
                    </ContactIcons>
                </ContactWrapper>
            </ContactContainer>
        </>
    );
}

export default Contact;
