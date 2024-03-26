import { useState } from "react";
import {
  AiOutlineCloseCircle,
  AiTwotoneAppstore,
} from "react-icons/ai";
import { PopUpWrapper } from "../";

const PortfolioModal = ({ onClose, popupData }) => {
  const [open, setOpen] = useState(false);
  const [openImage, setOpenImage] = useState(null);

  const { title, description, images, link } = popupData || {}

  const onClosePopup = () => setOpen(false);
  const imageModalClick = (dataImg) => {
    setOpenImage(dataImg);
    setOpen(true);
  };

  return (
    <>
      <div className="relative h-full md:w-[900px] w-full flex justify-center items-center bg-slate-50 flex-col rounded-md p-3">
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
            {/*    live preview Link */}
            {/* <a href={link} target="_blank" >      
             <div className="flex items-center pt-4 gap-2 cursor-pointer" >
              <span className="text-primary-color"><AiTwotoneAppstore /></span>
              <span className="text-gray-600  font-semibold ">Live Preview</span>
            </div>
            </a> */}

          </div>


          {/* ==== Project Video/Image ==== */}
          <div
            className={`relative w-full max-h-96 rounded-md mt-10 `}
          >

            <div className="h-100">
              <img src={images}
                alt={title}
                onClick={() => imageModalClick(images)}
                loading="lazy"
              />
            </div>

          </div>
          {/* ==== Portfulio Link ==== */}
          <div className="w-fit mx-auto mt-10">
            <a href={link} target="_blank" className="px-6 py-2 text-white font-semibold rounded-[5px] cursor-pointer bg-primary-color border border-primary-color hover:text-primary-color
                              hover:bg-white  transition-all duration-300 ease-in-out ">
              Live Preview
            </a>
          </div>
        </div>
      </div>
      {/* ==== Image Modal === */}
      <PopUpWrapper open={open} onClose={onClosePopup}>
        <img src={openImage} alt="project" loading="lazy" className=" h-full w-full object-cover " />
      </PopUpWrapper>
    </>
  );
};
export default PortfolioModal;
