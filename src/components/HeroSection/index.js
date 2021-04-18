import React, {useState} from 'react';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    Logo
} from "./HeroElements";
import {Button} from '../ButtonElement';
import Video from '../../videos/video.mp4'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg
                    autoPlay
                    loop
                    muted
                    src={Video}
                    type="video/mp4"
                    alt="Video by Pressmaster from Pexels"
                />
            </HeroBg>
            <HeroContent>
                <HeroH1>Caia Chuang</HeroH1>
                <HeroP>Hi, I am a Full Stack Web Developer</HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="contact"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        Contact Me
                        {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
