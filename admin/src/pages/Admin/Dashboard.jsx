import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {
  const {aToken, dashData, getDashData, cancelAppointment} = useContext(AdminContext)
  const {slotDateFormat} = useContext(AppContext)
  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  },[aToken])
  return dashData && (
    <div className='m-5'>
      <div className='flex flex-wrap gap-3'>

        <div className='flex items-center gap-2 bg-white border-2 border-gray-100 p-4 min-w-52 rounded shadow-sm min-w-[200px] cursor-pointer hover:scale-105 ease-in transition-all duration-100'>
          <img className='w-14' src={assets.doctor_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.doctors}</p>
            <p className='text-gray-400'>Doctors</p>
          </div>
        </div>

        <div className='flex items-center gap-2 bg-white border-2 border-gray-100 p-4 min-w-52 rounded shadow-sm min-w-[200px] cursor-pointer hover:scale-105 ease-in transition-all duration-100'>
          <img className='w-14' src={assets.patients_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.users}</p>
            <p className='text-gray-400'>Patients</p>
          </div>
        </div>

        <div className='flex items-center gap-2 bg-white border-2 border-gray-100 p-4 min-w-52 rounded shadow-sm min-w-[200px] cursor-pointer hover:scale-105 ease-in transition-all duration-100'>
          <img className='w-14' src={assets.appointments_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.appointments}</p>
            <p className='text-gray-400'>Appointments</p>
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border border-gray-300'>
          <img src={assets.list_icon} alt="" />
          <p className='font-semibold'>Latest Bookings</p>
        </div>
        <div className='pt-4 border border-t-0 border-gray-300 rounded-b '>
          {
            dashData.latestAppointments.map((item, index) => (
              <div key={index} className='flex items-center justify-between px-6 py-3 gap-3 border-b border-gray-300 hover:bg-gray-50'>
                <img className='w-14 rounded-full bg-gray-200' src={item.docData.image} alt="" />
                <div className='flex-1 text-sm'>
                  <p className='text-gray-800 font-medium'>{item.docData.name}</p>
                  <p className='text-gray-600'>{slotDateFormat(item.slotDate)} at {item.slotTime}</p>
                </div>
                {
                item.cancelled
                ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
                :<img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
                  
                }
              </div>
            )
          )
          }

        </div>
      </div>
    </div>
  )
}

export default Dashboard
