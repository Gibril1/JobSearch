import React from 'react'
import ShowcaseImage from '../assets/showcase.jpg'

const Showcase = () => {
  return (
    <div className="showcase-container container grid">
        
          <div className="showcase">
              <h1>Keep Track Of Your Job Applications here</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda ea veritatis facere labore eos? Quam laudantium, aliquid recusandae tempore harum ullam in optio delectus? Neque accusamus aut ipsa aliquid sapiente.
              </p>
              <button className='btn btn-primary'>Start Here</button>
          </div>
            <img src={ShowcaseImage} alt="Showcase" />
          </div>
          
  
  )
}

export default Showcase