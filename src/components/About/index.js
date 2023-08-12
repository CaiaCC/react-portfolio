import React from "react";
import { FaCss3, FaHtml5, FaJava, FaJs, FaNode, FaPython, FaReact } from "react-icons/fa";
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Paragraph,
    ListWrap,
    List,
    Column2,
    ImgWrap,
    Img,
    StackIcons,
} from "./AboutElements";

const About = ({
    id,
    lightBg,
    topLine,
    description1,
    experience1,
    experience2,
    description3,
    imgStart,
    img,
    alt,
    darkText,
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>

                                <Paragraph darkText={darkText}>
                                    {description1}
                                </Paragraph>
                                <ListWrap>
                                    <List darkText={darkText}>
                                        {experience1}
                                    </List>
                                    <List darkText={darkText}>
                                        {experience2}
                                    </List>
                                </ListWrap>
                                <Paragraph darkText={darkText}>
                                    {description3}
                                </Paragraph>
                                <StackIcons>
                                    <FaHtml5 style={{ margin: "0 .3em" }} />
                                    <FaCss3 style={{ margin: "0 .3em" }} />
                                    <FaJs style={{ margin: "0 .3em" }} />
                                    <FaReact style={{ margin: "0 .3em" }} />
                                    <FaNode style={{ margin: "0 .3em" }} />
                                    <FaJava style={{ margin: "0 .3em" }} />
                                    <FaPython style={{ margin: "0 .3em" }} />
                                </StackIcons>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default About;
