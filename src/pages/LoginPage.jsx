import React from 'react'
import Navbar from '../components/Navbar'
import LogPic from '../assets/users.png'


const LoginPage = () => {
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
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            className='formControl'
                        />
                    </div>
                    
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </section>
    </main>
    </>
  )
}

export default LoginPage