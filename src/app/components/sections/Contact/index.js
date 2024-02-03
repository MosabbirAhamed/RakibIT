import { CONTACT } from "../../../data";
import { ContactInfo, SectionTitle } from "../../elements";
import ContactForm from "../../elements/ContactForm";


function Contact() {
  const { title, subtitle, typeWriter, } = CONTACT;
  return (
    <section name="Contact" className="element">
      <div className="container">
        {/* ==== Section Title ==== */}
        <SectionTitle
          title={title}
          subtitle={subtitle}
          typeWriter={typeWriter}
          center
        />
        <div className="flex flex-wrap items-center justify-between">
          {/* ==== Contact Info ==== */}
          <ContactInfo {...CONTACT} />
          {/* ==== Contact Form ==== */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
