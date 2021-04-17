import React from 'react';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    Button,
    ArrowForward,
    ArrowRight
} from "./HeroElements";
import Video from '../../videos/video.mp4'

const HeroSection = () => {
    return (
        <HeroContainer>
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
                <HeroP>Full Stack Web Developer.</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup">
                        Get Started
                        {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
