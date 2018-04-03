import React from 'react'

export default ({ handleSubmit }) =>
  <section id="sign-up-content">
    <form className="auth-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="e-mail" name="email" />
      <input type="text" placeholder="Никнейм"name="name" />
      <input type="password" placeholder="Пароль" name="password" />
      <input type="password" placeholder="Повторите пароль" name="password_confirmation" />
      <input className="btn" type="submit" name="submit" value="Зарегестрироваться" />
    </form>
  </section>
