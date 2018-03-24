import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import { SIGN_IN_PATH, USER_CAN_CREATE_QUESTION } from 'core/constants'

const Header = (props, context) =>
<div className='header'>
  <div id='reg-auth'>
    <Link to={SIGN_IN_PATH}>
      <div className='btn'>Sign in</div>
    </Link>
  </div>
  {
    context.user.abilities & USER_CAN_CREATE_QUESTION ?
      <Link to="/question/new">
        <div>New Question</div>
      </Link> : null
  }
</div>

Header.contextTypes = {
  user: PropTypes.object.isRequired
}

export default Header
