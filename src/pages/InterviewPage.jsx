import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import JobComponent from '../components/JobComponent'
import { getJob, reset } from '../features/jobs/jobSlice'




const InterviewPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const { id } = useParams()
  
  useEffect(() => {
    dispatch(getJob(id))
    dispatch(reset())
  },[dispatch])
  
  const { jobs } = useSelector((state) => state.job )

  

  const handleClick = () => {
    navigate(`/create-interviews/${id}`)
  }

  return (
    <>
      <div className="flex">
        <h1>Interview Page</h1>
        <button className="btn" onClick={ handleClick }>Create Interview</button>
      </div>
    <br></br>
      <JobComponent job={jobs}/>

    </>
    
  )
}

export default InterviewPage