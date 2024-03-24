import React from 'react'

function Footer() {
  return (
    <div className='py-10'>
      <div className='h-[1px] w-full bg-gray-700'>
      </div>
      <div className='footer flex items-center justify-center flex-col mt-10'>
        <h1 className='phrase text-fifth tracking-wider text-sm font-mono'>
          Designed and Developed By
        </h1>
        <a href='https://github.com/ron103'>
        <h className='phrase text-fifth tracking-wider text-sm font-mono'>
          Rohan Waghmare
        </h></a>
      </div>
      </div>
  )
}

export default Footer