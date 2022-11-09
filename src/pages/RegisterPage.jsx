import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  FaEnvelopeOpen, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import LogPic from '../assets/users.png'
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
    <>
        
    <main>
        
        <section className="grid container flex">
            <div>
                <img src={LogPic} alt="" />
            </div>
            <form onSubmit={handleSubmit}>
                <h1>Join Us Today</h1>
                <div className="form-group">
                    <label htmlFor="firstName">
                    FirstName
                    </label>
                    <input 
                        type="text" 
                        name="firstName" 
                        id="firstName"
                        className='formControl'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">
                    LastName
                    </label>
                    <input 
                        type="text" 
                        name="lastName" 
                        id="lastName"
                        className='formControl'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="otherName">
                    OtherName
                    </label>
                    <input 
                        type="text" 
                        name="otherName" 
                        id="otherName"
                        className='formControl'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">
                    Age
                    </label>
                    <input 
                        type="number" 
                        name="age" 
                        id="age"
                        className='formControl'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dob">
                    Date Of Birth
                    </label>
                    <input 
                        type="date" 
                        name="dob" 
                        id="dob"
                        className='formControl'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        <FaEnvelopeOpen/>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        className='formControl'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        <FaEyeSlash/>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        className='formControl'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password2"><FaEyeSlash/>Confirm Password</label>
                    <input 
                        type="password" 
                        name="password2" 
                        id="password2"
                        className='formControl'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn'>Register</button>
                </div>
            </form>
            
        </section>
    </main>
    </>
    
  )
}

export default RegisterPage