import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import emailjs from '@emailjs/browser';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  
  
  const handleSubmit=(e)=>{
    e.preventDefault();

    const serviceId='service_69pr5uv'
    const templateId='template_3rcm5yj'
    const publicKey='_pY5P8QtGOC3C2oRp'
  

  const templateParams= {
    from_name: name,
    from_email: email,
    to_name: 'Rohan Waghmare',
    message: message,
  }

  emailjs.send(serviceId, templateId, templateParams, publicKey)
  .then((response)=>{
    console.log('Email sent successfully!', response);
    setName('');
    setEmail('');
    setMessage('');
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  })
  .catch((error)=>{
    console.error('Error sending email: ',error)
  })
  }
 

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
            I will try to respond to any query, request, or a friendly hello within 24 hours.
          </p>
          <div className="email-form-main">
          <form onSubmit={handleSubmit} className="email-form">
              <input className="rounded" type='text' placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)} />
              
              <input className="rounded" type='email' placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              
              <textarea className="rounded" cols="30" rows="10" placeholder="Your Message" value={message} onChange={(e)=>setMessage(e.target.value)}>

              </textarea>
              <button type='submit' className="border-[1px] mt-4 text-sm sm:text-sm font-mono border-secondary text-secondary px-10 py-2 rounded resume-button send-button">Send</button>
            </form>
            {showAlert && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 font-mono bg-primary text-fifth px-4 py-2 rounded-md" style={{fontSize:'10px'}}>
          Email sent successfully!
        </div>
      )}
            </div>
          </div>
          
          
        </div>

            

      </div>
  );
}

export default Contact;
