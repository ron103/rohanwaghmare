import React from "react";


function openEmail() {
    // Define the email address
    const emailAddress = 'waghmarerohan30@gmail.com';
  
    // Construct the mailto link with the email address
    const mailtoLink = `mailto:${emailAddress}`;
  
    // Open the default email client
    window.open(mailtoLink);
  }
  
function LeftSider() {

      
  return (
    <div className="lfsider fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row" >
          <div onClick={openEmail}><i class="icons ri-mail-fill text-gray-600 text-xl" /></div>
          <a href="https://www.instagram.com/rohannwaghmare">
          <i class="icons ri-instagram-line text-gray-600 text-xl"></i></a>
          <a href="https://www.github.com/ron103">
          <i class="icons ri-github-fill text-gray-600 text-xl"></i></a>
          <a href="https://www.linkedin.com/in/rohanwaghmare">
          <i class="icons ri-linkedin-box-fill text-gray-600 text-xl"></i></a>
        
        <div className="ls-line w-[1px] h-40 bg-[#242b3d] sm:hidden"></div>
        </div>
      </div>
    </div>
  );
}

export default LeftSider;
