import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality, docId}) => {
  const { doctors } = useContext(AppContext)
  const [relDoc, setRelDoc] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
      setRelDoc(doctorsData)
    }
  }, [doctors, speciality, docId])

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10' id='top-doctors'>
      <h1 className='text-3xl font-medium'>Related Doctors</h1>
      <p className='sm:w-1/3 text-sm text-center'>Simply browse through our extensive list of trusted doctors</p>
      <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {relDoc.slice(0, 5).map((doctor, index) => (
        <div onClick={() => {navigate(`/appointments/${doctor._id}`); scrollTo(0, 0);}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
            <img className='bg-blue-50' src={doctor.image} alt={doctor.name}/>
            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className={`w-2 h-2 ${doctor.available ? 'bg-green-500' : 'bg-gray-500'} rounded-full`}></p>
                    {
                        doctor.available 
                        ? <p className='text-sm text-green-500'>Available</p> 
                        : <p className='text-sm text-gray-500'>Not Available</p>
                    }
                </div>
                <p className='text-gray-900 text-lg font-medium'>{doctor.name}</p>
              <p className='text-gray-600 text-sm'>{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedDoctors
