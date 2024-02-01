import "./style.css";


function ServicesCard({ title, images, onClick, description }) {
  return (
    <div
      className="cursor-pointer w-full sm:w-[48%] md:w-[31%] hover:shadow-md  rounded-md  border border-primary-color md:border-transparent  hover:before:border-primary-color hover:border-primary-color hover: transition duration-300 "
      onClick={onClick}
    >
      <div className=" flex flex-col gap-2 md:gap-3">
        <div className="h-60 ">
          <img
            src={images}
            alt={title}
            className="object-cover w-full h-full rounded-md"
            loading="lazy"
          />
        </div>

        <div className=" md:p-2 px-3 py-2 ">
          <p className="text-primary-color text-center md:text-left  text-[18px] font-semibold">{title}</p>
          <p className="text-gray-600 text-[15px] ">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
