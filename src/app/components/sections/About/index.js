import { ABOUT } from "../../../data";
import { SectionTitle } from "../../elements";


function About() {
  const { title, image, exports } = ABOUT;
  return (
    <section name="About" className="element">
      <div className="container">
        <div className="">
          {/* ==== About Content ==== */}
          <div className="pb-[20px]">
            {/* ==== Section Title ==== */}
            <SectionTitle
              center
              title={title}
              subtitle={`Expert in`}
              typeWriter={exports}
            // className="md:text-left text-center"
            />
          </div>
          {/* ==== Services ==== */}
          <div className="flex  justify-between flex-wrap items-center">
            <div className="w-[48%] ">
              <img className="w-full h-full object-cover " src={image} alt={title} />
            </div>
            <div className="w-[48%] font-semibold">
              <h3 className="text-[20px] text-gray-600 pb-[30px] ">
                <h2 className="text-[22px] ">Welcome to <span className="text-primary-color ">Rakib IT</span>,</h2>
                Your trusted partner for top-tier IT-related services. I'm MD. Rakib Hossain,the founder of
                Rakib IT. I am a dedicated full-time freelancer with a passion for excellence in B2B Lead
                Generation, Data Entry, and various other invaluable services. Our expert team excels in IT
                services. So, you can trust us for your needs.
              </h3>
              <a href="https://mosabbir-ahamed.netlify.app/" className="px-6 py-2 text-white font-semibold rounded-[5px] cursor-pointer bg-primary-color border border-primary-color hover:text-primary-color
                              hover:bg-white  transition-all duration-300 ease-in-out ">
                About Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
