import { HeroBottom } from "../components/elements";
import { About, Contact, Hero, Portfolio, Resume } from "../components/sections";

function HomePage() {
    return (
        <>

            <Hero />
            <HeroBottom />
            <About />
            <Resume />
            <Portfolio />
            <Contact />

        </>

    )
}

export default HomePage;