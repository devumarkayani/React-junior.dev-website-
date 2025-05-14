import React from 'react'
import './blog.css'
import { blog01,blog02,blog03,blog04,blog05 } from './import'
import { Article } from '../../components'
function Blog() {
  return (
    <>
    <div className='gpt3__blog section__padding'>
      <div className="gpt3__blog-heading">
        <h1>A lot is Happing , <br /> We are blogging about </h1>
      </div>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">  
      <Article imagUrl={blog01} date="June 10, 2023   " text="GPT-3 and Open AI"/>
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imagUrl={blog02} date="June 10, 2023   " text="GPT-3 and Open AI"/>
       <Article imagUrl={blog03} date="June 10, 2023   " text="GPT-3 and Open AI"/> 
       <Article imagUrl={blog04} date="June 10, 2023   " text="GPT-3 and Open AI"/> 
       <Article imagUrl={blog05} date="June 10, 2023   " text="GPT-3 and Open AI"/> 
      </div>
      </div>
    </>
  )
}

export default Blog