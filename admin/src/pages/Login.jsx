import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Admin')
  return (
    <form className='min-h-[80vh] flex item-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96  rounded-xl text-[#5e5e5e] text-sm shadow-lg '>
        <p className='text-2xl font-semibold m-auto' ><span className='text-blue-500'>{state} </span> Login</p>
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-[#DADADA] p-2 rounded-md w-full mt-1' type="email" required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-[#DADADA] p-2 rounded-md w-full mt-1' type="password" required />
        </div>
        <button className='bg-[#5f6FFF] text-white w-full py-2 rounded-md text-base'>Login</button>
        {
          state === 'Admin'
          ? <p>Doctor Login? <span className='cursor-pointer text-blue-500 underline' onClick={() => setState('Doctor')}>Click here</span></p>
          : <p>Admin Login? <span className='cursor-pointer text-blue-500 underline' onClick={() => setState('Admin')}>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login
