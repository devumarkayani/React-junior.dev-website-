import React from 'react'
import possibilityImage from '../images/possibility.png'
import './possibility.css'
import { Link } from 'react-router-dom'
function Possibility() {
  return (<>
    <div className='gpt3_possibility section__padding'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="Possibility images" />
      </div>
    

    <div className="gpt3__possibility-content">
      <Link to='/features'><h4>Request Early Access to Get Started</h4></Link>
      <h1> The Possibility are <br/> Beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4> <Link to='/'>Go to Home page:</Link> </h4>
    </div>
  
    </div>  </>
  )
}

export default Possibility