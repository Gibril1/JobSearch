import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import InterviewComponent from '../components/InterviewComponent'
import JobComponent from '../components/JobComponent'
import { getInterview } from '../features/interviews/interviewSlice'
import { getJob, reset } from '../features/jobs/jobSlice'




const InterviewPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const { id } = useParams()
  
  useEffect(() => {
    dispatch(getJob(id))
    dispatch(reset())
    dispatch(getInterview(id))
  },[dispatch, id])
  
  const { jobs } = useSelector((state) => state.job )

  const { interviews } = useSelector((state) => state.interview )

  

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

      <br></br>

      { interviews.map((interview) => (
        <InterviewComponent key={interview._id} interview={interview}/>
      ))}
    </>
    
  )
}

export default InterviewPage