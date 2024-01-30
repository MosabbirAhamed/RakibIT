import { TypeWriter } from "../"

function SectionTitle({ title, subtitle, typeWriter, center = false, className }) {
    return (
        <div className={`${className} ${center && 'text-center'} mb-6`}>
            <p className="font-semibold text-lg text-gray-600 ">
                {subtitle}
                <TypeWriter
                    className="ml-1 text-lg "
                    title={typeWriter}
                />
            </p>
            <h1 className={`title text-4xl md:text-5xl ${center ? 'text-center' : 'lg:text-left'} font-semibold`}>
                {title}
            </h1>
        </div>
    )
}

export default SectionTitle