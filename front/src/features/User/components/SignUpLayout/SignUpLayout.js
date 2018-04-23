import React from 'react'
import PropTypes from 'prop-types'

import { createUser } from '../../models'
import { SpinButton } from 'components'

class SignUpForm extends React.Component {
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
    <section id="sign-up-content">
      <div className="auth-form">
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="e-mail"
          name="email"
        />
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Никнейм"
          name="name"
        />
        <input
          onChange={this.handleChange}
          type="password"
          placeholder="Пароль"
          name="password"
        />
        <input
          onChange={this.handleChange}
          type="password"
          placeholder="Повторите пароль"
          name="password_confirmation"
        />
        <SpinButton
          onClick={this.handleChange}
          className="btn"
        >
          Зарегестрироваться
        </SpinButton>
      </div>
    </section>
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default SignUpForm
