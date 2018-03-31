import React from 'react'
import './style.css'

export default () =>
  <div className="spinner-container">
    <div className="atom-spinner">
      <div className="spinner-inner">
        <div className="spinner-line"></div>
        <div className="spinner-line"></div>
        <div className="spinner-line"></div>
        <div className="spinner-circle">
          &#9679;
        </div>
      </div>
    </div>
  </div>
