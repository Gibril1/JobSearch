import React from 'react'
import { useState, useEffect } from 'react'
import { FaUserTie, FaEyeSlash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {   login } from '../features/auth/authSlice'



const LoginPage = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError) {
          toast.error(message)
        }
        if(isSuccess || user){
          navigate('/jobs')
        }
    
        // dispatch(reset())
    
      }, [user, isError, isSuccess, message, navigate, dispatch])
    
      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]:e.target.value
        }))
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
          email,
          password
        }
        
        // console.log(userData)
        dispatch(login(userData))
      }

      if(isLoading){
        return <p>Loading....</p>
      }
    
    
  return (
      <>
        <form onSubmit={handleSubmit} className="flex full-screen">
          <h1>Login</h1>
          <div className="form-group flex">
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                name="email" 
                id="email"
                onChange={onChange} />
          </div>
          <div className="form-group flex">
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                name="password" 
                id="password"
                onChange={onChange} />
        </div>
        <div className="form-group flex">
            <button className='btn'>Login</button>
        </div>
        </form>
      </>
  )
}

export default LoginPage