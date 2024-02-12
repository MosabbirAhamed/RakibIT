// import { AiOutlineDownload } from "react-icons/ai";
import { HERO } from "../../../data";
import { TypeWriter } from "../../elements";

function Hero() {
    const { name, title, subtitle, typeWriter } = HERO
    return (
        <section className="hero_bg h-[50vh] md:h-[80vh]" name="Hero">


            <div className=" w-full h-full pt-[100px]">
                {/* ==== Hero Content ==== */}
                <div className="container flex items-center ">
                    <div className="flex items-center justify-center py-[30px] md:py-[60px] flex-col w-[100%] sm:items-start sm:justify-start">
                        <h4 className="text-gray-600 font-semibold text-[20px] ">
                            {subtitle}
                            <span className="underline ml-2 decoration-primary-color tracking-wide">
                                {name}
                            </span>
                        </h4>
                        {/* ==== Type Writer ==== */}
                        <h1 className="title mt-0 text-center font-bold w-full sm:w-[500px] sm:text-left mb-8">
                            {title}
                            <TypeWriter
                                title={typeWriter}
                                className="ml-2"
                            />
                        </h1>
                        {/* ==== Resume Download ==== */}
                        {/* <Button href={button.url}>
                        {button.text}
                        <AiOutlineDownload className="ml-1 text-lg" />
                    </Button> */}
                    </div>
                </div>
            </div>




        </section>
    )
}

export default Hero