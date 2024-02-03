import { HEADER, SOCIAL_ICONS } from "../../../data"
import { Link, } from "react-scroll";

function Footer() {

    const { menus } = HEADER

    return (
        <footer className="p-3 bg-white rounded-lg shadow md:px-6 md:py-6 dark:bg-gray-800">
            <div className="flex flex-col justify-center gap-7 items-center">


                <div className='flex gap-5 items-center text-[20px]  '>
                    {SOCIAL_ICONS.map((icon, index) => (
                        <a href={icon.href} key={index} target="_blank" className=' !text-[30px] text-gray-200 hover:text-primary-color ' rel="noreferrer">
                            {icon.icon}
                        </a>
                    ))}
                </div>

                <div className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium">
                    {menus.map((link, index) => {
                        return (
                            <Link
                                activeClass="Footer__active_menu"
                                key={index}
                                className={`Footer__menu`}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="/" className="hover:underline" target="_blank" rel="noreferrer">MD Rakib Hossain</a>. All Rights Reserved.
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Build By <a href="/" className="hover:underline" target="_blank" rel="noreferrer">Mosabbir Ahamed</a>.
                    </span>
                </span>

            </div>


        </footer>
    )
}

export default Footer