import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import { USER_CAN_CREATE_QUESTION } from 'core/constants'
import User from 'modules/user'
import './style.css'

const Header = (props, context) =>
<div id="header">
  <User />
  {
    context.user.abilities & USER_CAN_CREATE_QUESTION ?
      <Link to="/question/new">
        <div className="header-btn">New Question</div>
      </Link> : null
  }
</div>

Header.contextTypes = {
  user: PropTypes.object.isRequired
}

export default Header