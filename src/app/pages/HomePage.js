import { HeroBottom } from "../components/elements";
import { About, Contact, Hero, Portfolio, Resume } from "../components/sections";

function HomePage() {
    return (
        <>

            <Hero />
            <HeroBottom />
            <About />
            <Resume linkName="Our Services" linkType="/services" />
            <Portfolio linkName="Our Services" linkType="/services" />
            <Contact />

        </>

    )
}

export default HomePage;