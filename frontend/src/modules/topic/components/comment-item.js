import React from 'react'
import PropTypes from 'prop-types'

const CommentItem = ({ body, id }, context) => {
  const { editComment, deleteComment } = context.handles
  return (
    <div className="comment-layout">
      <p>{body}</p>
      <div className="comment-icons">
        <i className="material-icons" onClick={editComment.bind(null, id)}>mode_edit</i>
        <i className="material-icons" onClick={deleteComment.bind(null, id)}>delete</i>
      </div>
    </div>
  )
}

CommentItem.contextTypes = {
  handles: PropTypes.object.isRequired
}

export default CommentItem
