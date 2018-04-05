import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import { USER_PROFILE, BACKEND_PATH } from 'core/constants'
import UserAuth from 'modules/user-auth'
import Find from '../find'
import './style.css'

const Header = (props, context) => {
  const { user } = context
  return <div id="header">
    <Link to="/">
      <div id="main-logo">
        <div className="logo-img" />
        <h1 id="header-title">fullStack</h1>
      </div>
    </Link>
    <div id="header-buttons">
      <Find />
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

Header.contextTypes = {
  user: PropTypes.object.isRequired
}

export default Header
