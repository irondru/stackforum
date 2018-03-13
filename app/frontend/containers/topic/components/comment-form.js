import React from 'react'

export default ({ body, commentableId, handleSubmit }) =>
  <div>
    <form onSubmit={(e) => handleSubmit(e, commentableId)}>
      <input type="text" defaultValue={body} name="body" />
      <input type="submit" />
    </form>
  </div>
