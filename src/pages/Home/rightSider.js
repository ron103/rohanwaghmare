import React, { useState } from 'react';

function RightSider() {
  const [showAlert, setShowAlert] = useState(false);

  const copyEmailToClipboard = () => {
    const email = 'waghmarerohan30@gmail.com'; // Replace with your email
    navigator.clipboard.writeText(email)
      .then(() => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000); // Automatically hide the alert after 2 seconds
      })
      .catch(error => console.error('Error copying email to clipboard: ', error));
  };

  return (
    <div className="fixed right-[0] bottom-0 px-10 sm:hidden">
      <div className="flex flex-col items-center gap-5">
        <div className="rsider flex flex-col text-fifth items-center gap-15  sm:flex-row">
          <div className='rsider-text transform rotate-90 font-mono text-sm tracking-wider' onClick={copyEmailToClipboard}>waghmarerohan30@gmail.com</div>
          <div className="rsider-line w-[1px] h-32 bg-[#242b3d] sm:hidden"></div>
        </div>
      </div>
      {showAlert && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 font-mono bg-primary text-fifth px-4 py-2 rounded-md" style={{fontSize:'10px'}}>
          Copied
        </div>
      )}
    </div>
  );
}

export default RightSider;
