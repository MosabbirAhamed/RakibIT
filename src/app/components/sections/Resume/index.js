import { RESUME } from "../../../data";
import { SectionTitle } from "../../elements";

import ServicesProjects from "../../elements/ServicesProjects";
import { Link } from 'react-router-dom'


function Resume({ linkType, linkName }) {
  const { title, subtitle, typeWriter, projects } = RESUME;

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
          {/* ==== Projects ==== */}
          <ServicesProjects projects={projects} />
          {/* ==== Github ==== */}
          <div className="block w-fit mx-auto mt-10">
            <Link to={linkType} className="px-6 py-2 text-white font-semibold rounded-[5px] cursor-pointer bg-primary-color border border-primary-color hover:text-primary-color
                              hover:bg-white  transition-all duration-300 ease-in-out ">
              {linkName}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
