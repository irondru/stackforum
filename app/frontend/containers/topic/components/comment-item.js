import React from 'react'

export default ({ body, id, handles }) =>
  <div>
    <p>{body}</p>
    <button onClick={handles.editComment.bind(null, id)}>Editcomment</button>
  </div>
