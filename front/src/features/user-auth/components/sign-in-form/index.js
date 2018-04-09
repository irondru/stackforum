import React from 'react'
import PropTypes from 'prop-types'

const SignInForm = ({ handleSubmit }) =>
  <section id="sign-in-content">
    <form className="auth-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="e-mail" name="email" />
      <input type="password" placeholder="Пароль" name="password" />
      <input className="btn" type="submit" name="submit" value="Войти" />
    </form>
  </section>

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default SignInForm
