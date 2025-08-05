import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import AppointmentCard from './components/AppointmentCard'

function App() {

  return (
    <>
      <Login />
      <AppointmentCard />
    </>
  )
}



export default App
