import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {

  const navigate = useNavigate();
  const {token, setToken, userData} = useContext(AppContext)
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
  }

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token]);


  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.MediHelpLogo} alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to="/">
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to="/doctors">
            <li className='py-1'>All Doctors</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to="/about">
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to="/contact">
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
  
            <button
            onClick={() => window.open(import.meta.env.VITE_ADMIN_URL, '_blank')} 
            className='py-0.5 px-2 m-1 border text-xs rounded-full'>Admin Panel</button>
      
    </ul>
    <div className='flex items-center gap-4'>
      {
        token && userData
        ? <div className='flex items-center gap-2 relative cursor-pointer group' >
          <img src={userData.image} alt="User Avatar" className='w-10 rounded-full' />
          <img src={assets.dropdown_icon} alt="Dropdown Icon" className='w-2.5'/>
          <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
              <p className='hover:text-black cursor-pointer'onClick={() => navigate('/my-profile')}>My profile</p>
              <p className='hover:text-black cursor-pointer'onClick={() => navigate('/my-appointments')}>My Appointments</p>
              <p className='hover:text-black cursor-pointer'onClick={logout}>Logout</p>
            </div>
          </div>
        </div>
        : <button onClick={() => navigate('/login')} className='bg-[#0278d2] text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>

      }
      <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
      {/* Mobile Menu */}
      <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0  z-20 overflow-hidden bg-white transition-all duration-300`}>
        <div className='flex items-center justify-between px-5 py-6'>
          <img className='' src={assets.MediHelpLogo} alt="" />
          <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <NavLink  onClick={() => setShowMenu(false)} to="/">
            <p className='px-4 py-2 rounded inline-block'>Home</p>
          </NavLink>
          <NavLink  onClick={() => setShowMenu(false)} to="/doctors">
            <p className='px-4 py-2 rounded inline-block'>All Doctors</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/about">
            <p className='px-4 py-2 rounded inline-block'>About</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/contact">
            <p className='px-4 py-2 rounded inline-block'>Contact</p>
          </NavLink>
          <button onClick={() => window.open(import.meta.env.VITE_ADMIN_URL, '_blank')} className='py-0.5 px-2 m-3 border text-xs rounded-full'>Admin Panel</button>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar
