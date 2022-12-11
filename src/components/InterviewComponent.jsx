import React from 'react'

const InterviewComponent = ({ interview }) => {
  return (
    <>
         <h3>{ interview.description }</h3>
        <p>{ interview.feedback}</p>
    </>
   
  )
}

export default InterviewComponent