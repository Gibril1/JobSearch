import React from 'react'
import { FaTenge, FaUser, FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="container flex">
            <h1>
              <Link to='/'>
                <FaTenge/>Job 360
              </Link>
            </h1>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
              <Link to='/login'>
                <FaSignInAlt/>Login
                </Link>

              </li>
              <li>
              <Link to='/register'><FaUser/>Register</Link>


              </li>
                
            </ul>
        </div>
    </nav>
  )
}

export default Navbar