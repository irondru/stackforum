import React from 'react'
import PropTypes from 'prop-types'

const CommentItem = ({ body, id }, context) => {
  const { editComment, deleteComment } = context.handles
  return (
    <div>
      <p>bidy: {body} id: {id}</p>
      <button onClick={editComment.bind(null, id)}>Editcomment</button>
      <button onClick={deleteComment.bind(null, id)}>Delete comment</button>
    </div>
  )
}

CommentItem.contextTypes = {
  handles: PropTypes.object.isRequired
}

export default CommentItem
