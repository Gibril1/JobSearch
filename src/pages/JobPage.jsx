import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import JobComponent from '../components/JobComponent'
import { getJobs, reset } from '../features/jobs/jobSlice'



const JobPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    navigate('/create-jobs')
  }

  

  useEffect(() => {
    dispatch(getJobs())
    dispatch(reset())
  }, [dispatch])

  const { jobs, isLoading } = useSelector((state) => state.job)

  if(isLoading){
    <div>Loading...</div>
  }

  return (
    <>
        <Navbar/>
        <div className="flex">
          <h1>Jobs Arena</h1>
          <button className='btn' onClick={handleClick}>New</button>
          </div> 

        <div>
          { jobs.map((job) => (
              <Link to={`/interviews/${job._id}`}>
                <JobComponent key={job._id} job={job}/>

              </Link>

              
            
          ))}
        </div>    
    </>
  ) 
  
  

  

  

  

  
  
 
}

export default JobPage