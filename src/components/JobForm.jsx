import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createJob } from '../features/jobs/jobSlice'
import Navbar from './Navbar'



const JobForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name:'',
    location:'',
    jobPosition:'',
  })

 

  const { name, location, jobPosition} = formData
  
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const jobData = {
      'name': name,
      'location': location,
      'jobPosition': jobPosition 
    }
    
    dispatch(createJob(jobData))
    navigate('/jobs')
    
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }
  return (
    <>
    <Navbar/>
      <section>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              id="name"
              placeholder='What is the name of the company you applied to'
              className='formControl'
              onChange={onChange} />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              
              name="location" 
              id="location"
              placeholder='What is the location of the company you applied to'
              className='formControl'
              onChange={onChange} />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              name="jobPosition" 
              id="jobPosition"
              placeholder='Which job position did you apply for'
              className='formControl'
              onChange={onChange} />
          </div>
          <div className="form-group">
            <button type="submit" className='btn'>Post</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default JobForm