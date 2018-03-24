import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

import { TOPICS_PATH, QUESTIONS, USER_CAN_CREATE_COMMENT } from 'core/constants'
import { CommentItem, CommentForm, Vote }  from '../components'

const QuestionItem = ({ title, body, id, score, comments, access }, context) => {

  const commentsList = () =>
    comments ? comments.map(comment =>
      comment.edit ? <CommentForm key={comment.id} {...comment} />
        : <CommentItem key={comment.id} {...comment} />
    ) : null

  return (
    <div>
      <h3>{title}</h3>
      <Vote votableType={QUESTIONS} votableId={id} score={score} />
      <p>{body}</p>
      {commentsList()}
      { access ? <Link to={TOPICS_PATH + id + '/edit'}>Edit</Link> : null }
      {
        context.user.abilities & USER_CAN_CREATE_COMMENT ?
        <CommentForm commentableType={QUESTIONS} commentableId={id} /> : null
      }
    </div>
  )
}

QuestionItem.contextTypes = {
  user: PropTypes.object.isRequired
}

export default QuestionItem
