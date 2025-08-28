import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'

const AddDoctor = () => {

    const [docImg, setDocImg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [experience, setExperience] = useState('1')
    const [fees, setFees] = useState('')
    const [speciality, setSpeciality] = useState('General Physician')
    const [about, setAbout] = useState('')
    const [degree, setDegree] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')

    const  {backendUrl, aToken } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            if (!docImg) {
                return toast.error("Image Not selected")
            }
        } catch (error) {
            
        }
    }

  return (
    <form onAbort={onSubmitHandler} className='m-5 w-full'>
        <p className='mb-3 text-lg font-medium'>Add Doctor</p>
        <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
            <div className='flex items-center gap-4 mb-8 text-gray-500'>
                <label htmlFor='doc-img'>
                    <img className='w-16 bg-gray-100 rounded-full  cursor-pointer' src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="" />
                </label>
                <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id='doc-img' hidden/>
                <p>Upload Doctor <br /> Image</p>
            </div>
             <div className='flex flex-col gap-10 lg:flex-row items-start text-gray-600'>
                <div className='w-full lg:flex-1 flex flex-col gap-4'>
                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Doctor Name</p>
                        <input onChange={(e) => setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Name' required />
                    </div>
                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Doctor Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="email" placeholder='Email' required />
                    </div>

                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Doctor Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} className='border rounded px-3 py-2' type="password" placeholder='Password' required />
                    </div>

                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Experience</p>
                        <select onChange={(e) => setExperience(e.target.value)} value={experience} className='border rounded px-3 py-2' name='' id=''>

                            <option value='1'>1 Year</option>
                            <option value='2'>2 Years</option>
                            <option value='3'>3 Years</option>
                            <option value='4'>4 Years</option>
                            <option value='5'>5 Years</option>
                            <option value='6'>6 Years</option>

                        </select>
                    </div>

                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Fees</p>
                        <input onChange={(e) => setFees(e.target.value)} value={fees} className='border rounded px-3 py-2' type="number" placeholder='Fees' required />
                    </div>
                </div>
                <div className='w-full lg:flex-1 flex flex-col gap-4'>
                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Speciality</p>
                        <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className='border rounded px-3 py-2' name='' id=''>

                            <option value='General Physician'>General Physician</option>
                            <option value='Gynecologist'>Gynecologist</option>
                            <option value='Dermatologist'>Dermatologist</option>
                            <option value='Pediatrician'>Pediatrician</option>
                            <option value='Neurologist'>Neurologist</option>
                            <option value='Gastroenterologist'>Gastroenterologist</option>
                        </select>
                    </div>
                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Education</p>
                        <input onChange={(e) => setDegree(e.target.value)} value={degree} className='border rounded px-3 py-2' type="text" placeholder='Education' required />
                    </div>
                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Address</p>
                        <input onChange={(e) => setAddress1(e.target.value)} value={address1} className='border rounded px-3 py-2' type="text" placeholder='Address 1' required />
                        <input onChange={(e) => setAddress2(e.target.value)} value={address2} className='border rounded px-3 py-2' type="text" placeholder='Address 2' required />
                    </div>
                    

                    
                </div>
             </div>
             <div >
                        <p className='mt-4 mb-2'>About</p>
                        <textarea onChange={(e) => setAbout(e.target.value)} value={about} className='w-full border rounded px-4 pt-2' name="" id="" rows={5} placeholder='Write about doctor...' required></textarea>
                    </div>
             <button type='submit' className='bg-[#5f6FFF] text-white rounded px-10 py-3 mt-4 rounded-full'>Add Doctor</button>
        </div>
    </form>
  )
}

export default AddDoctor
