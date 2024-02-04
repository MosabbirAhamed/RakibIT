import { RESUME } from "../../../data";
import { SectionTitle } from "../../elements";
import { useState } from "react";
import ServiceTypes from "../../elements/ServiceTypes";
import ServicesProjects from "../../elements/ServicesProjects";
import { Link } from 'react-router-dom'


function Resume() {
  const { title, subtitle, typeWriter, types, projects } = RESUME;
  const [selectedType, setSelectedType] = useState("All");

  return (
    <section name="Resume" className="element">
      <div className="container">
        {/* ==== Section Title ==== */}
        <SectionTitle
          center
          title={title}
          subtitle={subtitle}
          typeWriter={typeWriter}
        />
        <div className="mt-10">
          {/* ==== Project Types ==== */}
          <ServiceTypes
            types={types}
            onChange={setSelectedType}
            selected={selectedType}
          />
          {/* ==== Projects ==== */}
          <ServicesProjects projects={projects} type={selectedType} />
          {/* ==== Github ==== */}
          <div className="block w-fit mx-auto mt-10">
            <Link to="/services" className="px-6 py-2 text-white font-semibold rounded-[5px] cursor-pointer bg-primary-color border border-primary-color hover:text-primary-color
                              hover:bg-white  transition-all duration-300 ease-in-out ">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
