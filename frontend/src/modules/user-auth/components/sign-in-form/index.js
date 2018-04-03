import React from 'react'

import './style.css'

export default ({ handleSubmit }) =>
  <div>
    <form id="sign-in-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="e-mail" name="email" />
      <br/>
      <input type="password" placeholder="Пароль" name="password" />
      <br/>
      <input className="btn" type="submit" name="submit" value="Войти" />
    </form>
  </div>
