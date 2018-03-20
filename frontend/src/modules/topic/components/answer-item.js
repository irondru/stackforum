import React from 'react';
import { CommentItem, CommentForm, Vote } from '../components'
import { ANSWER, USER_CAN_CREATE_COMMENT } from 'core/constants'
import PropTypes from 'prop-types'

const AnswerItem = ({ id, body, comments, score }, context) => {
  const commentsList = () =>
    comments ? comments.map (comment =>
      !!comment.edit ? <CommentForm key={comment.id} {...comment} /> :
        <CommentItem key={comment.id} {...comment} />
    ) : null
  const { editAnswer } = context.handles
  return (
  <div>
    <p>{body}</p>
    <Vote votableType={ANSWER} votableId={id} score={score} />
    <button onClick={editAnswer.bind(null, id)}>Edit</button>
    {commentsList()}
    { this.context.user.abilities & USER_CAN_CREATE_COMMENT ?
      <CommentForm key={Math.random()} commentableId={id} commentableType={ANSWER} /> : null }
  </div>
 )
}

AnswerItem.contextTypes = {
  handles: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default AnswerItem
