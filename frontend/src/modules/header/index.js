import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { USER_PROFILE, BACKEND_PATH } from 'core/constants'
import UserAuth from 'modules/user-auth'
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
      {
        user.id ?
          <Link to={USER_PROFILE}>
            <img alt="avatar" height="42" src={BACKEND_PATH + user.avatar_thumb} />
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
