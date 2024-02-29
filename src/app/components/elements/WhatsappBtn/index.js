import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";

const WhatsappBtn = () => {
    return (
        <div className="relative">
            <div className="fixed bottom-[20px] right-[20px] md:bottom-[50px] md:right-[75px]" >
                <a href="https://wa.me/8801715362067" rel="noreferrer" target="_blank" className="text-[45px] md:text-[60px] text-[#49c356] ">
                    <span className="bg-white"><FaWhatsappSquare /></span>
                </a>
            </div>
        </div>
    )
}

export default WhatsappBtn