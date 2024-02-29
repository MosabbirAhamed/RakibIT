
import {
  AiOutlineCloseCircle,
  AiTwotoneAppstore,
} from "react-icons/ai";
import ServiceDetails from "../ServiceDetails";
import { Link } from "react-router-dom";


const ServiceModal = ({ onClose, popupData }) => {

  const { title, description, images } = popupData || {}


  return (
    <>
      <div className="relative h-full w-full flex justify-center items-center bg-white flex-col rounded-md p-3">
        {/* ==== Close Modal ==== */}
        <button className="absolute right-5 top-5 text-red-500 text-3xl z-10 outline-none" onClick={onClose}>
          <AiOutlineCloseCircle />
        </button>
        {/* ==== Project Details ==== */}
        <div className="w-full max-h-[698px] h-[90vh] p-3 md:p-7 overflow-y-scroll no-scrollbar">
          <div className="">
            <div className=" md:h-60 h-70 w-full md:w-[50%] mx-auto ">
              <img
                src={images}
                alt={title}
                className="object-cover w-full h-full rounded-md"
                loading="lazy"
              />
            </div>
          </div>

          <div className="">
            <h1 className="text-lg md:text-3xl text-primary-color font-Montserrat font-semibold">
              {title}
            </h1>
            <p className="text-gray-600 text-[15px] font-[Poppins] mt-5">
              {description}
            </p>
          </div>
          {/* ==== Project Details Cards ==== */}
          <div className="md:columns-2 mt-10 space-y-3">
            {popupData?.subservice?.map((singlesubservice, index) => (
              <div key={index} >
                <ServiceDetails
                  icon={<AiTwotoneAppstore />}
                  text={singlesubservice}
                />
              </div>
            ))}


          </div>
          <div className="w-fit mx-auto mt-10">
            <Link to="/contact" className="px-6 py-2 text-white font-semibold rounded-[5px] cursor-pointer bg-primary-color border border-primary-color hover:text-primary-color
                              hover:bg-white  transition-all duration-300 ease-in-out ">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};
export default ServiceModal;
