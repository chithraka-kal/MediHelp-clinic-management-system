import React, { useContext, useState } from 'react'
import { doctors } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const RelatedDoctors = ({speciality, docId}) => {
  const { doctors } = useContext(AppContext)
    const [relDoc, setRelDoc] = useState([])

  return (
    <div>

    </div>
  )
}

export default RelatedDoctors
