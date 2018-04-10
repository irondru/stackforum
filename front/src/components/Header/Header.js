import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { SearchBar } from './components'
import * as constants from '../../constants'
import UserAuth from '../../features/UserAuth'
import './Header.css'

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
      {
        user.id ?
          <Link to={constants.USER_PROFILE}>
            <img alt="avatar" height="42" src={constants.BACK_ROOT + user.avatar_thumb} />
          </Link>
        : null
      }
      <UserAuth />
    </div>
  </div>
}

const mapStateToProps = state => ({
  user: state.user.payload
})

export default connect(mapStateToProps)(Header)
