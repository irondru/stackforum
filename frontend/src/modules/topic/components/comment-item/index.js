import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import './style.css'

const CommentItem = ({ body, id, access, author, posted_at, editComment, deleteComment }) =>
  <div className="comment-item">
    <p>
      {body}
      &nbsp; – <Link to="">{author.name}</Link>
      &nbsp; {posted_at}
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

CommentItem.propTypes = {
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  access: PropTypes.bool.isRequired,
  author: PropTypes.object.isRequired,
  posted_at: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => ({
  editComment: id => dispatch(actions.editComment(id)),
  deleteComment: id => dispatch(actions.deleteComment(id))
})


export default connect(null, mapDispatchToProps)(CommentItem)
