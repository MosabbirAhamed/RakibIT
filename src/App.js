// import { BiBadge } from "react-icons/bi";
import {
  Header,
  Hero,
  About,
  Resume,
  Portfolio,
  Contact,
  Blogs,
  Footer,
} from "./app/components/sections";
import { HeroBottom } from "./app/components/elements";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HeroBottom />
      <About />
      <Resume />
      <Portfolio />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
