import React from 'react'

export default ({ body, id, handleEdit }) =>
  <div>
    <p>{body}</p>
    <button onClick={handleEdit.bind(null, id)}>Editcomment</button>
  </div>
