import { useEffect, useState } from "react";
import { PopUpWrapper } from "..";
import ServicesCard from "../ServicesCard";
import ServiceModal from "../ServiceModal";

function ServicesProjects({ projects }) {
  const [popupData, setPopupData] = useState(null);
  const [open, setOpen] = useState(false);

  const closeModal = () => setPopupData(null);

  useEffect(() => {
    // Open modal based on popupData
    if (popupData) setOpen(true);
    else setOpen(false);
  }, [popupData])

  return (
    <>
      <div className="container ">
        <div className="flex flex-wrap justify-center gap-5  mx-auto">
          {projects.map((project, index) => (
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
