import React, { useState } from 'react'
import './header.css'
import People from '../images/people.png'
import image from'../images/ai.png'
import axios from 'axios'
import { Brand } from '../../components'
function Header() {
  const[email,setEmail]=useState("");
  const HandeSubmit=(e)=>{
    
    axios.post('http://localhost:9000/user/email',
   { email:email,
   }
   )
   .then ( (res)=> {
    console.log(res);
   })
   .catch((error)=>{
    console.log(error)
   })
   setEmail('');
   

  }
  return (
    <div className='header'>
    <div className='main-header' >
    
        <div className="header__content">
          <h1 className='gradient__text'>This is the Websiter of  Chat GPT</h1>
          <p>This  is the paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates neque quo minima fugiat officia? Saepe obcaecati earum qui quod fuga laborum nihil. Facilis amet sit, non nostrum corrupti quasi!

          </p>

        </div>
        <div className="header__content-input">
          
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email' />
          <button type='button' onClick={HandeSubmit} >Get Started </button>
        </div>
        <div className='member'>
          <img src={People}alt="member" />
          <p>this is liked by 1029600 people</p>
        </div>
        <div className='contant-image'>
          <img src={image} alt="main images in the web"  useMap='ai-image'/>
          <map name="ai-image">
            <area shape="rect" coords="500,550,2081,2150"href="/whatgpt" alt="Go to gpt" />
          </map>
          
        </div>
        <Brand/>  
    </div>
    </div>
  )
}

export default Header