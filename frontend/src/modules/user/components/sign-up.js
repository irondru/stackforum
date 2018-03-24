import React from 'react'

export default ({ handleSubmit }) =>
  <div>
    <br/>
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" />
      <input type="text" name="name" />
      <input type="password" name="password" />
      <input type="password" name="password_confirmation" />
      <input type="submit" name="submit" />
    </form>
  </div>
