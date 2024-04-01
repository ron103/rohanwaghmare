import React from 'react';

function Footer() {
  return (
    <div className='py-10 px-4 '> {/* Added padding for responsiveness */}
      <div className='h-[1px] w-full bg-gray-700'></div>
      <div className='footer flex items-center justify-center flex-col mt-10 text-center'style={{fontSize:'12px'}}> {/* Added text-center for alignment */}
        <h1 className='contact text-fifth tracking-wider font-mono'>
          Designed and Developed By
        </h1>
        <a href='https://github.com/ron103' className='hover:underline'> {/* Added hover effect for better UI */}
          <h2 className='contact text-fifth tracking-wider font-mono'> {/* Corrected tag */}
            Rohan Waghmare
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Footer;
