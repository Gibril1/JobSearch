import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteInterview } from '../features/interviews/interviewSlice'

const InterviewComponent = ({ interview }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = () => {
    dispatch(deleteInterview(interview._id))
  }

  const handleEdit = () => {
    navigate(`/update-interview/${interview._id}`)
  }
  return (
    <>  
        <div>
          <button className='btn' onClick={handleEdit}>Edit</button>
          <button className='btn' onClick={handleDelete}>Delete</button>
        </div>
        <h3>{ interview.description }</h3>
        <p>{ interview.feedback}</p>
        <p>{ interview.success }</p>
    </>
   
  )
}

export default InterviewComponent