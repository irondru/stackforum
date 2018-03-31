import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import './style.css'

const CommentItem = ({ body, id, access, author }, context) => {
  const { editComment, deleteComment } = context.handles
  return <div className="comment-item">
    <p>
      {body}
      &nbsp; – <Link to="">{author.name}</Link>
      {
        access ?
          <span className="comment-icons">
            &nbsp;
            <i className="material-icons" onClick={editComment.bind(null, id)}>mode_edit</i>
            <i className="material-icons" onClick={deleteComment.bind(null, id)}>delete</i>
          </span>
        : null
      }
    </p>
  </div>
}

CommentItem.contextTypes = {
  handles: PropTypes.object.isRequired
}

export default CommentItem
