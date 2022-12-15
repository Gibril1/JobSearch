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
    jobPosition:''
  })

  const [file, setFile] = useState(null)

 

  const { name, location, jobPosition} = formData
  
  
  const handleSubmit = (e) => {
    e.preventDefault()

    
    const formData = new FormData()
    formData.append('image', file)
    formData.append('name', name)
    formData.append('location', location)
    formData.append('jobPosition', jobPosition)
    console.log(formData)
    dispatch(createJob(formData))
    navigate('/jobs')
    
  }

  const onFileChange = (e) => {
    setFile(e.target.files[0])
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
            <input 
              type="file" 
              name="image" 
              id="image"
              className='formControl'
              onChange={onFileChange} />
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