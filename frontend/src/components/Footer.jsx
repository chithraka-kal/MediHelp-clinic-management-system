import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img className='mb-5 w-40' src={assets.MediHelpLogo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li onClick={() => navigate('/')}>Home</li>
                <li onClick={() => navigate('/about')}>About Us</li>
                 <li onClick={() => navigate('/contact')}>Contact Us</li>
                <li >Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Address: 123 MediHelp Street, Health City</li>
                <li>Email: 0KUjC@example.com</li>
                <li>Phone: +1 (123) 456-7890</li>            
            </ul>
        </div>

      </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center text-gray-600'>© {new Date().getFullYear()} MediHelp. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
