import React, { useState } from "react";
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import {
    homeObjOne,
} from "../components/InfoSection/Data";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <Projects />
            <Contact />
            <Footer/>
        </>
    );
};

export default Home;
