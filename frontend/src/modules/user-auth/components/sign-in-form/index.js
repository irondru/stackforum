import React from 'react'

export default ({ handleSubmit }) =>
  <section id="sign-in-content">
    <form className="auth-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="e-mail" name="email" />
      <input type="password" placeholder="Пароль" name="password" />
      <input className="btn" type="submit" name="submit" value="Войти" />
    </form>
  </section>
