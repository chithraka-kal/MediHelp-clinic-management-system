import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointments = () => {

  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  }

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return docInfo && (

    <div>
      
      <div>
        <div>
          <img src={docInfo?.image} alt="" />
        </div>
        <div>
          <p>{docInfo?.name} <img src={assets.verified_icon} alt="" /></p>
          <p>{docInfo?.speciality}</p>
          <p>{docInfo?.experience}</p>
          <p>{docInfo?.fees}</p>
        </div>
      </div>

    </div>
  )
}

export default Appointments
