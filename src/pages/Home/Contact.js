import React from "react";
import SectionTitle from "../../components/SectionTitle";



function Contact() {
  const socials=[
    'Socials',
    'Coding',
    'Publication',
    'Certification',
  ]
  return (
    <div className="contact-page">
      <SectionTitle title="Contact" />
      <div className="contact-page-down flex justify-center items-center sm:flex-col">
        <div className="flex flex-col gap-7 justify-center items-center text-center">
          <h1 className="text-fourth text-5xl sm:text-3xl font-bold py-7">
            Let's catch up!
          </h1>
          <p className="con-text font-mono text-fifth" style={{ fontSize: '10px', maxWidth: '350px' }}>
            Don't hesitate to reach out! I'm here to connect.
          </p>

          <p className="con-text font-mono text-fifth" style={{ fontSize: '10px', maxWidth: '350px' }}>
            Below are my socials. I will try respond to any query, request, or a friendly hello within 24 hours.
           </p>
           <div className="social-cloud-container cloud-container">
              {socials.map((social, index) => (
                <button className="tech-cloud" key={index}>
                  {social}
                </button>
              ))}
            </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
