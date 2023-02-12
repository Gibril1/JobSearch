import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  FaEnvelopeOpen, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'



const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        otherName:'',
        dob:'',
        age:'',
        password:'',
        password2:'',
        email:'',
       
    })

    const { firstName, lastName, otherName, dob, age, email, password, password2 } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
            navigate('/login')
        }

        dispatch(reset())
    },[user, isError, isLoading, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(password !== password2){
            toast.error('Passwords do not match')
        } else{
            const userData = { firstName, lastName, otherName, dob, age, email, password }
            dispatch(register(userData))
        }
    }
  return (
    <div>
    <form onSubmit={handleSubmit} className='flex full-screen'>
        <h1>Join Us Today</h1>
        <div className="form-group flex">
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text" 
                name="firstName" 
                id="firstName"
                onChange={onChange} />
        </div>
        <div className="form-group flex">
            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text" 
                name="lastName" 
                id="lastName"
                onChange={onChange} />
        </div>
        <div className="form-group flex">
            <label htmlFor="otherName">Other Names</label>
            <input 
                type="text" 
                name="otherName" 
                id="otherName"
                onChange={onChange} />
        </div>
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
            <label htmlFor="password2">Confirm Password</label>
            <input 
                type="password" 
                name="password2" 
                id="password2"
                onChange={onChange} />
        </div>
        <div className="form-group flex">
            <label htmlFor="age">Age</label>
            <input 
                type="number" 
                name="age" 
                id="age"
                onChange={onChange} />
        </div>
        <div className="form-group flex">
            <button className='btn'>Register</button>
        </div>

    </form>
    
        
    
    </div>
    
  )
}

export default RegisterPage