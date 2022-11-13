import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getJob } from '../features/jobs/jobSlice'



const JobPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    navigate('/create-jobs')
  }

  useEffect(() => {
    dispatch(getJob())
  }, [dispatch])

  const { jobs } = useSelector((state) => state.job)

  return (
    <>
        <Navbar/>
        <div className="flex">
          <h1>Jobs Arena</h1>
          <button className='btn' onClick={handleClick}>New</button>
          </div> 

        <div>
          { jobs.map((job) => (
            <>
              <div key={job.id}>
                <h3>{ job.name}</h3>
                <p>{ job.location }</p>
                <p>{ job.jobPosition }</p>
              </div>
              <br /><br /><br />
              <hr />
            </>
          ))}
        </div>    
    </>
  ) 
  
  

  

  

  

  
  
 
}

export default JobPage