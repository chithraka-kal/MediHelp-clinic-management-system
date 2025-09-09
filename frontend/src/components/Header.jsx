import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    
    <div className='relative flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20 bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${assets.header_bg})`}}>
      {/* Black opacity overlay */}
      <div className='absolute inset-0 bg-black opacity-50 rounded-lg'></div>
      
     {/* left side */}
    <div className='relative z-10 md:w-1/2 flex flex-col justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
      <p className='text-3xl md:text-4xl lg:text-5xl text-white  rounded font-semibold leading-tight md:leading-tight lg:leading-tight'>
        Book Appointment <br/> With Trusted Doctors
      </p>
      <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
        <img className='w-28' src={assets.doc_online} alt="" />
        <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block'/> schedule your appointment hassle-free.</p>
      </div>
      <a href="#specialty" className='bg-[#0278d2] text-white px-8 py-3 rounded-full font-light flex items-center gap-2 w-fit hover:bg-[#1b86d7]  transition-all duration-300'>
      Book Appointment <img className='w-4' src={assets.right_arrow_icon} alt="" />
      </a>
    </div>
    {/* right side */}
    <div className='relative z-10 md:w-1/2 relative'>
    
    </div>
    </div>
  )
}

export default Header
