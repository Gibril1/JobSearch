import React from 'react'
import Navbar from '../components/Navbar'
import Showcase from '../components/Showcase'
import HeroImage from '../assets/hero.png'
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <>
        <Navbar/>
        <Showcase/>
        <div className="hero-section">
            <div className="container grid">
                <div className="hero-content flex">
                    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto qui tempore veritatis ipsa debitis, deleniti tempora pariatur repellat quos, laborum est? Animi facilis nemo veritatis eos ipsa sapiente vitae placeat.</h2>
                </div>
                <div className="hero-content-img">
                    <img src={HeroImage} alt="" />
                </div>
                <div className="hero-content-img">
                    <img src={HeroImage} alt="" />
                </div>
                <div className="hero-content flex">
                    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto qui tempore veritatis ipsa debitis, deleniti tempora pariatur repellat quos, laborum est? Animi facilis nemo veritatis eos ipsa sapiente vitae placeat.</h2>
                </div>
                
                <div className="hero-content flex">
                    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto qui tempore veritatis ipsa debitis, deleniti tempora pariatur repellat quos, laborum est? Animi facilis nemo veritatis eos ipsa sapiente vitae placeat.</h2>
                    

                </div>
                <div className="hero-content-img">
                    <img src={HeroImage} alt="" />
                </div>
              
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default HomePage