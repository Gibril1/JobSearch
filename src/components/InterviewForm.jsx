import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { createInterview } from '../features/interviews/interviewSlice'
import Navbar from './Navbar'



const InterviewForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  

  const[formData, setFormData] = useState({
    description:'',
    feedback:'',
    success:''
  })

  const { description, feedback, success } = formData

  const handleSubmit = (e) => {
    e.preventDefault()

    const interviewData = {
      'description':description,
      'feedback': feedback,
      'success':success,
      'id' : id
    }

    
    dispatch(createInterview(interviewData))
    navigate(`/interviews/${id}`)

    // console.log(id)
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
      <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            name="description" 
            id="description"
            placeholder='Describe how the interview went'
            className='formControl'
            onChange={onChange}
             />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            name="feedback" 
            id="feedback"
            placeholder='What feedback were you given'
            className='formControl'
            onChange={onChange}
             />
        </div>
        <div className="form-group">
        <input 
            type="text" 
            name="success" 
            id="success"
            placeholder='What success were you given'
            className='formControl'
            onChange={onChange}
             />
        </div>
          
          
       
          <div className="form-group">
            <button type="submit" className='btn'>Post</button>
          </div>        
      </form>
      </>
      
    </>
  )
}

export default InterviewForm