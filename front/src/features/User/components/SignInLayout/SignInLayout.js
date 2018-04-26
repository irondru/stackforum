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

  handleSubmit = () => {
    const { user } = this.state
    const { signIn } = this.props.stack
    signIn(user)
  }

  render = () => {
    const { fetching } = this.props.stack
    return (
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
            spin={!!fetching}
            className="btn"
            onClick={this.handleSubmit}
          >
            Войти
          </SpinButton>
        </div>
      </section>
    )
  }

}

SignInLayout.propTypes = {
  stack: PropTypes.object.isRequired
}

export default SignInLayout
