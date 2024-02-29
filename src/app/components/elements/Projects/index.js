import { useEffect, useState } from "react";
import { PortfolioCard, PortfolioModal, PopUpWrapper } from "../";

function Projects({ projects }) {

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
      <div className="flex flex-wrap justify-center gap-x-6  mx-auto">
        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            {...project}
            project={project}
            onClick={() => setPopupData(project)}
          />
        ))}
      </div>
      {/* ==== Project Modal ==== */}
      <PopUpWrapper open={open} nested onClose={closeModal}>
        <PortfolioModal onClose={closeModal} popupData={popupData} />
      </PopUpWrapper>
    </>
  );
}

export default Projects;
