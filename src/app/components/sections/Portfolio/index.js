import { ProjectTypes, Projects, SectionTitle } from "../../elements";
import { PORTFOLIO } from "../../../data";
import { useState } from "react";

function Portfolio() {
  const [selectedType, setSelectedType] = useState("All");
  const { title, subtitle, typeWriter, types, projects, } = PORTFOLIO;

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
            <ProjectTypes
              types={types}
              onChange={setSelectedType}

              selected={selectedType}
            />
            {/* ==== Projects ==== */}
            <Projects projects={projects} type={selectedType} />
            {/* ==== Github ==== */}
            <div className="block w-fit mx-auto my-5">
              <a href="https://mosabbir-ahamed.netlify.app/" className="px-6 py-2 text-white font-semibold rounded-[5px] cursor-pointer bg-primary-color border border-primary-color hover:text-primary-color
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
