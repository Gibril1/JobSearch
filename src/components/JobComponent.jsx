import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteJob } from '../features/jobs/jobSlice'


const JobComponent = ({ job }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate() 

  const handleDelete = () => {
    dispatch(deleteJob(job._id))
    navigate(`/interviews/${job._id}`)
  }

  const handleEdit = () => {
    navigate(`/update-job/${job._id}`)
  }
  

  return (
    <div>
      <hr />
        <button className="btn" onClick={handleDelete}>Delete Button</button>
        <button onClick={handleEdit}>Edit Button</button>
        <Link to={`/interviews/${job._id}`}><h3>{ job.name}</h3></Link>
        <p>{ job.location }</p>
        <p>{ job.jobPosition }</p>
        <hr />
      
      
    </div>
  )
}

export default JobComponent