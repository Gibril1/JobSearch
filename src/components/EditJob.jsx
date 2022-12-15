import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getJob, reset, updateJob } from '../features/jobs/jobSlice'


const EditJob = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getJob(id))
        dispatch(reset())
    }, [dispatch, id])

    // getting the state of the job
    const { jobs } = useSelector((state) => state.job)
    
  
    

    // setting the initial state
    const [formData, setFormData] = useState({
        name:jobs.name ,
        location: jobs.location ,
        jobPosition:  jobs.jobPosition
    })

    // Destructuring the formData object
     const { name, location, jobPosition } = formData
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const jobData = {
          'name': name,
          'location': location,
          'jobPosition': jobPosition,
          'id': id
        }

        dispatch(updateJob(jobData, id))
        navigate(`/interviews/${id}`)

    }

    // this function is responsible for the form elements being responsive
    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name] : e.target.value
        }))
      }
  return (
    <>
    <div>EditJob</div>

    {/* <JobComponent job={jobs}/> */}
    <section>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <input 
              type="text" 
              name="name" 
              id="name"
              value= { formData.name || '' }
              className='formControl'
              onChange={onChange} />
            </div>
            <div className="form-group">
            <input 
              type="text" 
              
              name="location" 
              id="location"
              value={ formData.location || '' }
              className='formControl'
              onChange={onChange} />
            </div>
            <div className="form-group">
            <input 
              type="text" 
              name="jobPosition" 
              id="jobPosition"
              value = { formData.jobPosition || '' }
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

export default EditJob