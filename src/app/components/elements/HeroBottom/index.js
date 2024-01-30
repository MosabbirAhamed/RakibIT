import { SOCIAL_ICONS } from "../../../data"

function HeroBottom() {
  return (
    <div className=''>
      <div className="container">
        <div className='flex py-4 justify-between md:flex-row flex-col gap-4 items-center'>
          {/* ==== left side - Counters ==== */}
          <div className="flex gap-[80px]">
            <div className="">
              <div>
                <h3 className="text-gray-600 font-semibold text-[24px]">We Are Experts in Lead Generation And Data Entry Services</h3>
                <h3 className="text-primary-color font-semibold text-[22px]">With 4 Years Of Experience.</h3>
              </div>

            </div>
          </div>
          {/* ==== Right side - social icons ==== */}
          <div className='flex gap-5 items-center text-[20px]  '>
            {SOCIAL_ICONS.map((icon, index) => (
              <a href={icon.href} key={index} target="_blank" className=' !text-[30px] text-primary-color  hover:text-gray-600 ' rel="noreferrer">
                {icon.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroBottom