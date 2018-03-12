import React from 'react'

export default ({ body, handleSubmit }) =>
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" defaultValue={body} name="body" />
      <input type="submit" />
    </form>
  </div>
