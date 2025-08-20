import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-10 justify-center mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>5470 Williom Staion <br/>Sute 350, Washington, USA</p>
          <p className='text-gray-500'>Tel: 123-456-789 <br/>Email: X3P7o@example.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at MediHelp</p>
          <p className='text-gray-500'>Learn more about our team and job openings</p>
          <button className='border border-black text-sm px-8 py-4 hover:bg-blue-500 hover:text-white transition-all duration-500'>Explore Careers</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
