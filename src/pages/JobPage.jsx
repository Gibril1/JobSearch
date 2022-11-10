import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'


const JobPage = () => {
  const navigate = useNavigate()

  const handleClick = () => {
      navigate('/create-jobs')
      console.log('clicked')
  }
  return (
    <>
        <Navbar/>
        <div className="flex">
          <h1>Jobs Arena</h1>
          <button className='btn' onClick={handleClick}>New</button>
        </div>
        
        
    </>
  )
}

export default JobPage