import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="container flex">
            <h1>
              <Link to='/'>Job 360</Link>
            </h1>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
              <Link to='/login'>Login</Link>

              </li>
              <li>
              <Link to='/register'>Register</Link>


              </li>
                
            </ul>
        </div>
    </nav>
  )
}

export default Navbar