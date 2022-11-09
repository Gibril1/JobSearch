import React from 'react'
import { useState, useEffect } from 'react'
import { FaUserTie, FaEyeSlash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { reset, login } from '../features/auth/authSlice'
import LogPic from '../assets/users.png'


const LoginPage = () => {
    const [formData, setFormData] = useState({
        username:'',
        password:''
    })

    const { username, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError) {
          toast.error(message)
        }
        if(isSuccess || user){
          navigate('/')
        }
    
        dispatch(reset())
    
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
          username,
          password
        }
    
        dispatch(login(userData))
      }

      if(isLoading){
        return <p>Loading....</p>
      }
    
    
  return (
    <>
        
        <main>
            <section className="grid container flex">
                <div>
                    <img src={LogPic} alt="" />
                </div>
                
                <form onSubmit={handleSubmit}>
                    <h1>Log In</h1>
                    <div className="form-group">
                        <label htmlFor="username">
                            <FaUserTie/>Username
                            </label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username"
                            className='formControl'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><FaEyeSlash/>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            className='formControl'
                            onChange={onChange}

                        />
                    </div>
                    
                    <div className="form-group">
                        <button 
                            type="submit" className='btn'
                            >Login</button>
                    </div>
                </form>
                
            </section>
    </main>
    </>
  )
}

export default LoginPage