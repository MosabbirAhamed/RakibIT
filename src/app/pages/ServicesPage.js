import React from 'react'
import { Contact, Hero, Portfolio, Resume, } from "../components/sections";

function ServicesPage() {
    return (
        <>
            <Hero />
            <Resume linkName="Contact Us" linkType="/contact" />
            <Portfolio linkName="Contact Us" linkType="/contact" />
            <Contact />
        </>
    )
}

export default ServicesPage