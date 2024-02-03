
function ContactInfo({ email, phone, location, country, text }) {
    return (
        <div className="flex flex-col w-full md:w-[48%] my-8">
            <div className=" text-gray-600">
                <address className="font-medium block text-xl md:text-2xl leading-8">
                    <span className="">Address: </span>
                    {location}
                    <span className="block">{country}</span>
                </address>
                <span className="block font-medium text-xl md:text-2xl mt-6 ">Phone: <a href={`tel: ${phone}`} className=" font-medium text-xl md:text-2xl">  {phone}</a></span>

                <span className="block font-medium text-xl md:text-2xl mt-4 ">Email: <a href={`mailto: ${email}`} className="mt-5 font-medium text-xl md:text-2xl">{email}</a></span>


            </div>
        </div>
    );
}

export default ContactInfo;