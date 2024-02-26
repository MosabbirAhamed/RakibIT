import React from 'react'
import { ABOUT, } from '../../../data';
import { AiFillFacebook, } from 'react-icons/ai';
import { FaEnvelope, FaTelegram, FaWhatsappSquare } from "react-icons/fa";
import { BsSkype } from "react-icons/bs";

const ContactDet = () => {
    const { contact } = ABOUT;
    return (
        <div className=" pt-[70px] md:pt-[120px]">
            <div className="container">
                {/* ==== About Content ==== */}
                <div className=" flex justify-center ">
                    <h2 className="text-3xl text-gray-600 font-semibold mx-auto  ">Get in <span className="text-primary-color ">Touch</span></h2>
                </div>
                {/* ==== Services ==== */}
                <div className="flex  flex-col-reverse md:flex-row justify-between gap-4 md:gap-0 flex-wrap  items-center">
                    <div className="md:w-[48%] w-full ">
                        <p className=" text-[15px] font-medium md:text-[17px] text-gray-600 pb-[15px] ">
                            <span className="text-[20px] block pb-4 font-semibold">Welcome to <span className="text-primary-color ">Rakib IT</span>,</span>
                            Thank you for your interest in our services. Whether you have questions about our offerings,
                            or want to explore the best opportunities, we're here to help you with our best possible service.
                            <span className="pt-4 block">Here, you can use the contact below to send us a message directly. We will do our best to respond to your inquiry promptly.</span>
                        </p>

                        <div className="text-[18px] font-semibold text-slate-600  ">
                            <p className="pb-3">For Any Query:</p>
                            <div className="flex  gap-4 ">
                                <a href="mailto:mdrakibhossain1316@gmail.com"
                                    className=' hover:text-gray-600 text-[#1a9761] '
                                    rel="noreferrer"
                                    title="Email"
                                >
                                    <FaEnvelope size={30} />
                                </a>

                                <a href="https://wa.me/8801715362067"
                                    target="_blank"
                                    className='!text-[30px] hover:text-gray-600 text-[#009EDC] '
                                    rel="noreferrer"
                                    title="Skype"
                                >
                                    <BsSkype size={30} />
                                </a>
                                <a href="https://www.linkedin.com/in/mosabbir-ahamed/"
                                    target="_blank"
                                    className=' hover:text-gray-600 text-[#0088cc] '
                                    rel="noreferrer"
                                    title="Telegram"
                                >
                                    <FaTelegram size={30} />
                                </a>
                                <a href="https://www.facebook.com/mosabbir.ahammed"
                                    target="_blank"
                                    className='!text-[30px] hover:text-gray-600 text-[#0865fe] '
                                    rel="noreferrer"
                                    title="Facebook"
                                >
                                    <AiFillFacebook size={32} />
                                </a>
                                <a href="https://wa.me/8801715362067"
                                    target="_blank"
                                    title="Whatsapp"
                                    className='!text-[30px] hover:text-gray-600 text-[#36be48e6] '
                                    rel="noreferrer"
                                >
                                    <FaWhatsappSquare size={32} />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="md:w-[48%] w-full ">
                        <img className="w-full h-full object-cover " src={contact} alt="contact" />
                    </div>

                </div>



            </div>

        </div>
    )
}

export default ContactDet