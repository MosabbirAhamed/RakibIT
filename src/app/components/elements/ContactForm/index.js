

function ContactForm() {

    return (
        <div className="">
            <div className=" hidden md:block ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.43308095016562!2d88.74033205211165!3d24.918175575088444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc85b14c8d7d2d%3A0x5bb21dd3516a3a13!2sRH%20IT!5e1!3m2!1sen!2sbd!4v1711471973415!5m2!1sen!2sbd"
                    width="600"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="No content"
                >

                </iframe>
            </div>
            <div className=" block md:hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.43308095016562!2d88.74033205211165!3d24.918175575088444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc85b14c8d7d2d%3A0x5bb21dd3516a3a13!2sRH%20IT!5e1!3m2!1sen!2sbd!4v1711471973415!5m2!1sen!2sbd"
                    width="300"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="No content"
                >

                </iframe>
            </div>

        </div>
    )
}

export default ContactForm