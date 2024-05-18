import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  


 

  return (
    <div className="contact-page">
      <SectionTitle title="Contact" />
      <div className="contact-page-down flex sm:flex-col">
        <div className="flex flex-col gap-7">
          <h1 className="text-fourth text-5xl sm:text-3xl font-bold py-7">
            Let's catch up!
          </h1>
          <p className="con-text font-mono text-fifth" style={{ fontSize: '10px', maxWidth: '350px' }}>
            Don't hesitate to reach out! I'm here to connect.
          </p>
          <p className="con-text font-mono text-fifth" style={{ fontSize: '10px', maxWidth: '350px' }}>
            On left you can find my socials. I will try to respond to any query, request, or a friendly hello within 24 hours.
          </p>
          </div>
        </div>
      </div>
  );
}

export default Contact;
