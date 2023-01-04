import React from 'react'
import { FaTenge, FaUser, FaSignInAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { reset, logout } from '../features/auth/authSlice'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    <nav className="navbar">
        <div className="container">
            <h1>
              <Link to='/'>
                <FaTenge/>Job 360
              </Link>
            </h1>
            <ul>
              { user ? (
                <>
                <li>
                  <button type="submit"
                  onClick={onLogout}
                  >Logout</button>
                </li>
                </>
              ):(
                <>
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
                </>
                
                
              )}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar