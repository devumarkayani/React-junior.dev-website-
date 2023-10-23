import { Link} from "react-router-dom"
import React from 'react'
import logo  from"../images/logo.svg"
import './navbar.css'
//import {RiMenu3Line,RiCloseLine} from 'react-icons'
function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbor_link">
            <div className="navbar_linkLogo">
              <img src={logo} alt="logo" /> 
            
            <div className="navbar_linkContainer">
               <p>   <Link to='/'> Home</Link> </p>
               <p>   <Link to='/whatgpt'> What is GPT?</Link> </p>
               <p>   <Link to='/features'> Open Ai!</Link> </p>
               <p>   <Link to='/possibility'> Case Studies</Link> </p>
               <p>   <Link to='/library'> Library</Link> </p>
                    </div>
                    </div>
        </div>
        <div className="navbar_sign">
          <p><Link to='/sign'> Sign in</Link></p>
          <button type='button'><Link to='/register'> Sign Up</Link> </button>
        </div>

    </div>
  
  )
}

export default Navbar