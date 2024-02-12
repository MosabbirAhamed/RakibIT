import React from 'react'
import { Contact, Hero, } from "../components/sections";
import AboutDec from '../components/elements/AboutDec';

function AboutPage() {
    return (
        <>
            <Hero />
            <AboutDec />
            <Contact />
        </>
    )
}

export default AboutPage;