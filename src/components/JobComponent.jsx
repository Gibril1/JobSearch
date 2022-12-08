import React from 'react'


const JobComponent = ({ job }) => {

  

  return (
    <div>
      
        <h3>{ job.name}</h3>
        <p>{ job.location }</p>
        <p>{ job.jobPosition }</p>
      
      
    </div>
  )
}

export default JobComponent