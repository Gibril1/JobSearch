import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getInterview, updateInterview } from '../features/interviews/interviewSlice'
import Navbar from './Navbar'


const EditInterview = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
      dispatch(getInterview(id))
    }, [dispatch, id])

    const { interviews } = useSelector((state) => state.interviews)

    const [formData, setFormData] = useState({
      description: interviews.description,
      feedback: interviews.feedback,
      success: interviews.success
    })

    const { description, feedback, success } = formData

    const handleSubmit = (e) => {
      e.preventDefault()

      const interviewData = {
        'description': description,
        'feedback': feedback,
        'success': success
      }

      dispatch(updateInterview(interviewData, id))
      navigate(`/interviews/${interviews.jobId}`)
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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            name="description" 
            id="description"
            value={ formData.description || ''}
            onChange={onChange} />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            name="feedback" 
            id="feedback"
            value={ formData.feedback || ''}
            onChange={onChange} />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            name="success" 
            id="success"
            value={ formData.success || ''}
            onChange={onChange} />
        </div>
      </form>
    </>
  )
}

export default EditInterview