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

  handleSubmit = () => {
    const { user } = this.state
    const { signUp } = this.props.stack
    signUp(user)
  }

  render = () => {
    const { fetching } = this.props.stack
    return (
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
            spin={!!fetching}
            onClick={this.handleSubmit}
            className="btn"
          >
            Зарегестрироваться
          </SpinButton>
        </div>
      </section>
    )
  }
}

SignUpForm.propTypes = {
  stack: PropTypes.object.isRequired
}

export default SignUpForm
