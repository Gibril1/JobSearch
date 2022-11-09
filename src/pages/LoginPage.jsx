import React from 'react'
import { FaUserTie, FaEyeSlash } from 'react-icons/fa'
import LogPic from '../assets/users.png'


const LoginPage = () => {
  return (
    <>
        
        <main>
            <section className="grid container flex">
                <div>
                    <img src={LogPic} alt="" />
                </div>
                
                <form>
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
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><FaEyeSlash/>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            className='formControl'
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