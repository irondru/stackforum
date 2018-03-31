import React from 'react'

export default ({ handleSubmit }) =>
  <div>
    <br/>
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" />
      <input type="password" name="password" />
      <input type="submit" name="submit" />
    </form>
  </div>
