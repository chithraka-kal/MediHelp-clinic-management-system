import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'


const Login = () => {

  const [state, setState] = useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setAtoken, backendUrl } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      if (state === 'Admin') {

        const {data} = await axios.post(backendUrl + 'api/admin/login', { email, password })
        if (data.success) {

          console.log("data.token")
          // localStorage.setItem('aToken', data.token)
          // setAtoken(data.token)
          
          
        }
        
      }else{

      }
      
    } catch (error) {
      
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96  rounded-xl text-[#5e5e5e] text-sm shadow-lg '>
        <p className='text-2xl font-semibold m-auto' ><span className='text-blue-500'>{state} </span> Login</p>
        <div className='w-full'>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] p-2 rounded-md w-full mt-1' type="email" required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] p-2 rounded-md w-full mt-1' type="password" required />
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
