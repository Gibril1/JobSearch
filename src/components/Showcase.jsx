import React from 'react'
import ShowcaseImage from '../assets/showcase.png'


const Showcase = () => {
  return (
    <div className="showcase-container">
        <div className="container grid">
        <div className="showcase">
            <h1>Keep Track Of Your Job Applications here</h1>
            <p>The best place for keeping up with your numerous job applications. Good Luck</p>
            <button>Start Here</button>
        </div>
        <div className="showcase-img">
            <img src={ShowcaseImage} alt="" />
        </div>
        </div>
  </div>
  )
}

export default Showcase