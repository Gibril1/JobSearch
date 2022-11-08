import React from 'react'
import LogPic from '../assets/users.png'
import Navbar from '../components/Navbar'

const RegisterPage = () => {
  return (
    <>
        <Navbar/>
    <main className="logpage">
        <section className="grid container">
            <div className="logimage">
                <img src={LogPic} alt="" />
            </div>
            <div className="form">
                <form>
                    <div className="form-group flex">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username"
                            className='formControl'
                        />
                    </div>
                    <div className="form-group flex">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            className='formControl'
                        />
                    </div>
                    <div className="form-group flex">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            className='formControl'
                        />
                    </div>
                    <div className="form-group flex">
                        <label htmlFor="password2">Confirm Password</label>
                        <input 
                            type="password" 
                            name="password2" 
                            id="password2"
                            className='formControl'
                        />
                    </div>
                    <div className="form-group flex">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </section>
    </main>
    </>
    
  )
}

export default RegisterPage