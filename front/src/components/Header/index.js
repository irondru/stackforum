import React from 'react'
import { Link } from 'react-router-dom'

import { SearchBar } from './components'
import './style.css'

const Header = ({ user }) => {
  return <div id="header">
    <Link to="/">
      <div id="main-logo">
        <div className="logo-img" />
        <h1 id="header-title">fullStack</h1>
      </div>
    </Link>
    <div id="header-buttons">
      <SearchBar />

    </div>
  </div>
}

export default Header
