import React, { useState } from "react";
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import {
    homeObjOne,
} from "../components/About/Data";

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
            <About {...homeObjOne}/>
            <Projects />
            <Contact />
            <Footer/>
        </>
    );
};

export default Home;
