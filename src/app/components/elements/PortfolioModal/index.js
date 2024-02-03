import { useState } from "react";
import {
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { PopUpWrapper } from "../";

const PortfolioModal = ({ onClose, popupData }) => {
  const [open, setOpen] = useState(false);
  const [openImage, setOpenImage] = useState(null);

  const { title, description, images } = popupData || {}

  const onClosePopup = () => setOpen(false);
  const imageModalClick = (dataImg) => {
    setOpenImage(dataImg);
    setOpen(true);
  };

  return (
    <>
      <div className="relative h-full w-full flex justify-center items-center bg-slate-50 flex-col rounded-md p-3">
        {/* ==== Close Modal ==== */}
        <button className="absolute right-5 top-5 text-red-500 text-3xl z-10 outline-none" onClick={onClose}>
          <AiOutlineCloseCircle />
        </button>
        {/* ==== Project Details ==== */}
        <div className="w-full max-h-[698px] h-[90vh] p-7 overflow-y-scroll no-scrollbar">
          <div className="">
            <h1 className="text-lg md:text-3xl text-primary-color font-Montserrat font-semibold">
              {title}
            </h1>
            <p className="text-gray-600 text-[15px] font-[Poppins] mt-5">
              {description}
            </p>
          </div>


          {/* ==== Project Video/Image ==== */}
          <div
            className={`relative w-full max-h-96 rounded-md mt-10 `}
          >

            <div className="h-100">
              <img src={images?.default}
                alt={title}
                onClick={() => imageModalClick(images?.default)}
              />
            </div>

          </div>
          {/* ==== Project Images ==== */}

        </div>
      </div>
      {/* ==== Image Modal === */}
      <PopUpWrapper open={open} onClose={onClosePopup}>
        <img src={openImage} alt="project" className="w-full object-cover " />
      </PopUpWrapper>
    </>
  );
};
export default PortfolioModal;
