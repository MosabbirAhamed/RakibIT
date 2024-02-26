import React from 'react'
import SectionTitle from '../SectionTitle'
import { ABOUT } from '../../../data';
import { AiFillLinkedin, AiFillFacebook, } from 'react-icons/ai';
import { FaWhatsappSquare } from "react-icons/fa";


const AboutDec = () => {
    const { title, image, exports, mosabbir, rakib } = ABOUT;
    return (
        <>

            <div className="container">

                {/* About old section */}
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
                    <div className="flex  flex-col-reverse md:flex-row justify-between gap-4 md:gap-0 flex-wrap  items-center">
                        <div className="md:w-[48%] w-full font-semibold">
                            <h3 className=" text-18px md:text-[20px] text-gray-600 pb-[30px] ">
                                <p className="text-[22px] ">Welcome to <span className="text-primary-color ">Rakib IT</span>,</p>
                                Your trusted partner for top-tier IT-related services. I'm MD. Rakib Hossain,the founder of
                                Rakib IT. I am a dedicated full-time freelancer with a passion for excellence in B2B Lead
                                Generation, Data Entry, and various other invaluable services. Our expert team excels in IT
                                services. So, you can trust us for your needs.
                            </h3>

                        </div>
                        <div className="md:w-[48%] w-full ">
                            <img className="w-full h-full object-cover " src={image} alt={title} />
                        </div>

                    </div>

                </div>

                {/* About trust section */}
                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 flex-wrap items-center pt-[20px] md:pt-[80px] pb-[30px] md:pb-[60px]">

                    <div className="md:w-[48%] w-full text-center md:pb-0 pb-6  md:text-left">
                        <h2 className="md:text-[48px] text-[30px] font-bold text-gray-600 " > Rakib IT: <span className="md:text-[48px] text-[30px] font-bold text-primary-color ">Your</span> </h2>
                        <h2 className="md:text-[48px] text-[30px] font-bold text-primary-color " >Trusted IT Patner</h2>

                    </div>

                    <div className="md:w-[48%] w-full  font-semibold">
                        <h3 className=" text-18px md:text-[20px] text-gray-600 pb-[30px] ">
                            <p className="text-[22px] ">At <span className="text-primary-color ">Rakib IT</span>,</p>
                            We redefine excellence in IT services. With a rock-solid reputation for trustworthiness and a
                            commitment to delivering the best, we are your go-to partner for all things IT. Our dedicated
                            team leverages cutting-edge technology and expertise to provide tailored solutions, including
                            B2B lead generation, to help you thrive in the digital landscape. Experience the difference with
                            a partner you can rely on, every step of the way.

                        </h3>

                    </div>

                </div>


                {/* About dec section */}


                <div className="border-t border-gray-400 py-7">
                    <div className="flex flex-wrap justify-around items-center">
                        <div className="flex flex-col items-center px-6">
                            <h2 className="text-[48px] text-gray-600 font-bold ">4</h2>
                            <p className="text-[20px] font-semibold text-gray-600 ">Years in Business</p>
                        </div>
                        <div className="flex flex-col items-center px-6 ">
                            <h2 className="text-[48px] text-gray-600 font-bold ">150+</h2>
                            <p className="text-[20px] font-semibold text-gray-600 ">Happy Customers</p>
                        </div>
                        <div className="flex flex-col items-center px-6 ">
                            <h2 className="text-[48px] text-gray-600 font-bold ">2K+</h2>
                            <p className="text-[20px] font-semibold text-gray-600 text-center">Project Successfully Completed</p>
                        </div>

                    </div>
                </div>


                {/* About Our Team section */}
                <div className=" pt-[20px] md:pt-[70px] pb-[40px] ">
                    {/* ==== Our Team ==== */}
                    <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 flex-wrap items-center">
                        <div className="md:w-[48%] w-full space-y-5 ">
                            <h3 className=" text-gray-600 text-[19px] font-semibold">Why  <span className="text-primary-color ">Choose Us?</span> </h3>
                            <p className="text-[16px] text-gray-700 ">
                                Based in Bangladesh, we take pride in our experienced team of experts dedicated
                                to providing top-notch IT-related services. We approach every project with confidence,
                                ensuring the best possible outcomes for our valued clients.
                            </p>
                            <p className="text-[16px] text-gray-700 ">
                                At Rakib IT, we believe in the power of exceptional service.
                                If you have any questions or need further information, please don't
                                hesitate to reach out to us. Your success is our priority.
                            </p>
                            <p className="text-[16px] text-gray-700 ">
                                Thank you for considering us as your partner in IT solutions. Let's embark on this journey together!
                            </p>

                        </div>

                        {/* ==== Our Team ==== */}
                        <div className="md:w-[48%] w-full ">
                            {/* <h3 className=" pb-10 text-gray-600 text-[19px] font-semibold">Meet  <span className="text-primary-color ">Our Team!</span> </h3> */}
                            <div className=" flex justify-around flex-col md:flex-row items-center gap-4 md:gap-0 ">

                                {/* ==== Rakib ==== */}
                                <div className=" md:w-[48%] w-full flex flex-col justify-center items-center gap-3   ">
                                    <img className="w-[220px] h-[180px]  rounded-[100%] object-fill " src={rakib} alt="MD. Rakib Hossain" />
                                    <div className="text-center " >
                                        <h3 className='text-[18px] text-primary-color font-semibold  '>MD. Rakib Hossain</h3>
                                        <p className="text-gray-600">Founder & CEO</p>
                                    </div>
                                    <div className=" flex items-center gap-2 ">
                                        <a href="https://www.facebook.com/mdrakibhossain1316"
                                            target="_blank"
                                            className=' hover:text-gray-600 text-[#0e76a8] '
                                            rel="noreferrer"
                                        >
                                            <AiFillLinkedin size={30} />
                                        </a>
                                        <a href="https://www.facebook.com/mdrakibhossain1316"
                                            target="_blank"
                                            className='!text-[30px] hover:text-gray-600 text-[#316FF6] '
                                            rel="noreferrer"
                                        >
                                            <AiFillFacebook size={30} />
                                        </a>
                                        <a href="https://wa.me/8801715362067"
                                            target="_blank"
                                            className='!text-[30px] hover:text-gray-600 text-[#075E54] '
                                            rel="noreferrer"
                                        >
                                            <FaWhatsappSquare size={30} />
                                        </a>
                                    </div>
                                </div>

                                {/* ====   Mosabbir    ==== */}
                                <div className=" md:w-[48%] w-full flex flex-col justify-center items-center gap-3   ">
                                    <img className="w-[220px] h-[180px]  rounded-[100%] object-fill " src={mosabbir} alt="Mosabbir Ahamed" />
                                    <div className="text-center " >
                                        <h3 className='text-[18px] text-primary-color font-semibold  '>Mosabbir Ahamed</h3>
                                        <p className="text-gray-600">Co-Founder & Web Developer</p>
                                    </div>
                                    <div className=" flex items-center gap-2 ">
                                        <a href="https://www.linkedin.com/in/mosabbir-ahamed/"
                                            target="_blank"
                                            className=' hover:text-gray-600 text-[#0e76a8] '
                                            rel="noreferrer"
                                        >
                                            <AiFillLinkedin size={30} />
                                        </a>
                                        <a href="https://www.facebook.com/mosabbir.ahammed"
                                            target="_blank"
                                            className='!text-[30px] hover:text-gray-600 text-[#316FF6] '
                                            rel="noreferrer"
                                        >
                                            <AiFillFacebook size={30} />
                                        </a>
                                        <a href="https://wa.me/8801754807456"
                                            target="_blank"
                                            className='!text-[30px] hover:text-gray-600 text-[#075E54] '
                                            rel="noreferrer"
                                        >
                                            <FaWhatsappSquare size={30} />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>


            </div>


        </>
    )
}

export default AboutDec