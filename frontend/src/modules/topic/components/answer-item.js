import React from 'react';
import { CommentItem, CommentForm, Vote } from '../components'
import { ANSWERS, USER_CAN_CREATE_COMMENT } from 'core/constants'
import PropTypes from 'prop-types'

const AnswerItem = ({ id, body, comments, score, access }, context) => {

  const commentsList = () =>
    comments ? comments.map (comment =>
      !!comment.edit ? <CommentForm key={comment.id} {...comment} /> :
        <CommentItem key={comment.id} {...comment} />
    ) : null

  const { editAnswer, deleteAnswer } = context.handles

  return (
    <div className="post-layout">
      <div className="post-layout-left">
        <Vote votableType={ANSWERS} votableId={id} score={score} />
      </div>
      <div className="post-layout-right">
        <div className="post-text">
          <p>{body}</p>
        </div>
        { commentsList() }
        {
          context.user.abilities & USER_CAN_CREATE_COMMENT ?
          <CommentForm key={Math.random()} commentableId={id} commentableType={ANSWERS} /> : null
        }
        <button onClick={editAnswer.bind(null, id)}>Edit</button>
        { access ? <button onClick={deleteAnswer.bind(null, id)}>Delete</button> : null }
     </div>
   </div>
 )
}

AnswerItem.contextTypes = {
  handles: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default AnswerItem
