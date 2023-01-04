import React from 'react'
import ShowcaseImage from '../assets/showcase.jpg'

const Showcase = () => {
  return (
    <div className="showcase-container">
        <div className="container grid">
          <div className="showcase">
            <h1>keep track of your job applications here</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit similique architecto dignissimos? Eos neque eum veniam nesciunt excepturi aliquam soluta odit reprehenderit ab, consectetur sed eligendi eveniet porro. Similique, dolorum?</p>
            <button className="btn btn-primary">start here</button>
          </div>
          <div>
            <img src={ ShowcaseImage } alt="Showcase" />
          </div>
        </div>
    </div>         
  
  )
}

export default Showcase