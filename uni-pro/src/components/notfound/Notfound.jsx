import React from 'react'
import  './nopage.css'
import nopage from '../../containers/images/nopage.gif'

function Notfound() {
  return (
    <div className='no-page'>
      <div className="content">
        <h2>
          No Page Found....
        </h2>
      </div>
      <img src={nopage} alt="nopage found" />
    </div>
  )
}

export default Notfound