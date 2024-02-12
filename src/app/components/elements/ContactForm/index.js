

function ContactForm() {

    return (
        <div className="">
            <div className=" hidden md:block ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14473.646160549304!2d88.7303040994869!3d24.918046505109345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb7f72139dfa7d%3A0x4cfebecf34ff6e40!2sKunjabon!5e0!3m2!1sen!2sbd!4v1706942580593!5m2!1sen!2sbd"
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14473.646160549304!2d88.7303040994869!3d24.918046505109345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb7f72139dfa7d%3A0x4cfebecf34ff6e40!2sKunjabon!5e0!3m2!1sen!2sbd!4v1706942580593!5m2!1sen!2sbd"
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