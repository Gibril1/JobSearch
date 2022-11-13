import React from 'react'
import Navbar from './Navbar'

const InterviewForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = () => {

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
            type="radio" 
            name="success" 
            id="true"
            value='True'
            className='formControl' />True
          <input 
            type="radio" 
            name="success" 
            id="false"
            value='False'
            className='formControl' />False
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