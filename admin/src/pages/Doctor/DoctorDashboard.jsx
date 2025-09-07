import React from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { useEffect } from 'react'
import assets from '../../assets/assets'

const DoctorDashboard = () => {
  const { dToken,dashData, setDashData, getDashData} = useContext(DoctorContext)

  useEffect(() => {
    if (dToken) {
      getDashData()
    }
  }, [dToken])


  return dashData && (
        <div className='m-5'>
      <div className='flex flex-wrap gap-3'>

        <div className='flex items-center gap-2 bg-white border-2 border-gray-100 p-4 min-w-52 rounded shadow-sm min-w-[200px] cursor-pointer hover:scale-105 ease-in transition-all duration-100'>
          <img className='w-14' src={assets.earning_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.earnings}</p>
            <p className='text-gray-400'>Earnings</p>
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

    </div>
  )
}

export default DoctorDashboard
