import { Projects, SectionTitle } from "../../elements";
import { PORTFOLIO } from "../../../data";

function Portfolio() {

  const { title, subtitle, typeWriter, projects, } = PORTFOLIO;

  return (
    <section name="Portfolio" className="element">
      <div className="">
        {/* ==== Section Title ==== */}
        <SectionTitle
          center
          title={title}
          subtitle={subtitle}
          typeWriter={typeWriter}
        />
        {/* ==== Project Types ==== */}
        <div className="bg-[#e5eaf79b] py-3 ">
          <div className="container ">

            {/* ==== Projects ==== */}
            <Projects projects={projects} />
            {/* ==== Button ==== */}
            <div className="block w-fit mx-auto my-5">
              <a href="/service" className="px-6 py-2 text-white font-semibold rounded-[5px] cursor-pointer bg-primary-color border border-primary-color hover:text-primary-color
                              hover:bg-white  transition-all duration-300 ease-in-out ">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
