import React from 'react'
import './brand.css';
import { google,dropbox,shopify,slack } from './import';

function Brand() {
  return (
    <div>
      <div className="brand_section">
        <div>
          <img src={google} alt="google" />
        </div>
        <div>
          <img src={dropbox} alt="dropbox" />
        </div>
        <div>
          <img src={shopify} alt="shopify" />
        </div>
        <div>
          <img src={slack} alt="slack" />
        </div>
      </div>
    </div>
  )
}

export default Brand