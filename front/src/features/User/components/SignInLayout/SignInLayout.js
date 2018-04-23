import React from 'react'
import PropTypes from 'prop-types'

import { SpinButton } from 'components'
import { createUser } from '../../models'

class SignInLayout extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: createUser()
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState(prev => ({
      ...prev,
      user: {
        ...prev.user,
        [name]: value
      }
    }))
  }

  render = () =>
    <section id="sign-in-content">
      <div className="auth-form">
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="e-mail"
          name="email"
        />
        <input
          onChange={this.handleChange}
          type="password"
          placeholder="Пароль"
          name="password"
        />
        <SpinButton
          className="btn"
          onClick={this.props.handleSubmit.bind(null, this.state.user)}
        >
          Войти
        </SpinButton>
      </div>
    </section>
}

SignInLayout.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default SignInLayout
