import React from 'react'
import PropTypes from 'prop-types'

const SignUpForm = ({ handleSubmit }) =>
  <section id="sign-up-content">
    <form className="auth-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="e-mail" name="email" />
      <input type="text" placeholder="Никнейм"name="name" />
      <input type="password" placeholder="Пароль" name="password" />
      <input type="password" placeholder="Повторите пароль" name="password_confirmation" />
      <input className="btn" type="submit" name="submit" value="Зарегестрироваться" />
    </form>
  </section>

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default SignUpForm
