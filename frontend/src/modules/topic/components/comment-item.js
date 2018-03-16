import React from 'react'

export default ({ body, id, handles }) =>
  <div>
    <p>bidy: {body} id: {id}</p>
    <button onClick={handles.editComment.bind(null, id)}>Editcomment</button>
  </div>
