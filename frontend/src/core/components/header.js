import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import { SIGN_IN_PATH, USER_CAN_CREATE_QUESTION } from 'core/constants'

const Header = (props, context) =>
<div className='header'>
  <Link to={SIGN_IN_PATH}>Sign in</Link>
  {
    context.user.abilities & USER_CAN_CREATE_QUESTION ?
      <Link to="/question/new">New Question</Link> : null
  }
</div>

Header.contextTypes = {
  user: PropTypes.object.isRequired
}

export default Header
