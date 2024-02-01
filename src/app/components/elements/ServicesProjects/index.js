import { useCallback, useEffect, useState } from "react";
import { PopUpWrapper } from "..";
import ServicesCard from "../ServicesCard";
import ServiceModal from "../ServiceModal";

function ServicesProjects({ projects, type }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [popupData, setPopupData] = useState(null);
  const [open, setOpen] = useState(false);

  const filter = useCallback(() => {
    // Filter projects by type
    if (type === "All") return setFilteredProjects(projects);
    setFilteredProjects(projects.filter((project) => project.type === type));
  }, [projects, type]);

  const closeModal = () => setPopupData(null);

  useEffect(() => filter(), [filter]);

  useEffect(() => {
    // Open modal based on popupData
    if (popupData) setOpen(true);
    else setOpen(false);
  }, [popupData])

  return (
    <>
      <div className="container ">
        <div className="flex flex-wrap justify-center gap-5  mx-auto">
          {filteredProjects.map((project, index) => (
            <ServicesCard
              key={index}
              {...project}
              project={project}
              onClick={() => setPopupData(project)}
            />
          ))}
        </div>
      </div>
      {/* ==== Project Modal ==== */}
      <PopUpWrapper open={open} nested onClose={closeModal}>
        <ServiceModal onClose={closeModal} popupData={popupData} />
      </PopUpWrapper>
    </>
  );
}

export default ServicesProjects;
