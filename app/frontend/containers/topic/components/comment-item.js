import React from 'react'

export default ({ body, handleEdit }) =>
  <div>
    <p>{body}</p>
    <button onClick={handleEdit}>Editcomment</button>
  </div>
