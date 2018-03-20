import React from 'react'
import PropTypes from 'prop-types'

const CommentItem = ({ body, id }, context) =>
  <div>
    <p>bidy: {body} id: {id}</p>
    <button onClick={context.handles.editComment.bind(null, id)}>Editcomment</button>
  </div>

CommentItem.contextTypes = {
  handles: PropTypes.object.isRequired
}

export default CommentItem
