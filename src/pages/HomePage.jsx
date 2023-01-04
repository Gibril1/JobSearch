import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <>
    <div className="home-bg">
      <div className='navbar'>
        <h1>Job 360</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='#about'>About</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </div>
      <div className="showcase flex">
        <h1><span className='primary-color'>Keep Track of</span> your job applications here</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reiciendis consectetur quae, quaerat doloribus facere id, laudantium consequatur, cum asperiores corporis beatae assumenda vitae obcaecati quibusdam molestiae ullam ad quasi. Omnis et tempore quasi autem possimus iste pariatur ad! Doloribus.</p>
        <button className='btn btn-primary'>Get Started</button>
      </div>
    </div>
    </>
    
  )
}

export default HomePage