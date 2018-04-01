import React from 'react';
import { CommentItem, CommentForm, Vote } from '../../components'
import { ANSWERS, USER_CAN_CREATE_COMMENT, BACKEND_PATH } from 'core/constants'
import PropTypes from 'prop-types'

import './style.css'

const AnswerItem = ({ id, body, comments, score, access, author,
  posted_at, itsMyTopic, best }, context) => {

  const commentsList = () =>
    comments ? comments.map (comment =>
      !!comment.edit ? <CommentForm key={comment.id} {...comment} /> :
        <CommentItem key={comment.id} {...comment} />
    ) : null

  const { editAnswer, deleteAnswer, bestAnswer } = context.handles

  return <div className="post-layout">
    <div className="post-layout-left">
      <img alt="avatar" className="post-avatar" src={BACKEND_PATH + author.avatar} />
      <Vote votableType={ANSWERS} votableId={id} score={score} />
      {
        itsMyTopic ?
          <i className={`material-icons ${best ? 'best-answer' : null}`}
            onClick={bestAnswer.bind(null, id)}>done</i>
        : null
      }
    </div>
    <div className="post-layout-right">
      <div className="post-layout-right-header">
        <b>{author.name}</b> {posted_at}
      </div>
      <div className="post-text">
        <p>{body}</p>
      </div>
      { commentsList() }
      {
        context.user.abilities & USER_CAN_CREATE_COMMENT ?
        <CommentForm key={Math.random()} commentableId={id} commentableType={ANSWERS} /> : null
      }
      {
        access ?
          <div className="flex-right">
            <i className="material-icons" onClick={editAnswer.bind(null, id)}>mode_edit</i>
            <i className="material-icons" onClick={deleteAnswer.bind(null, id)}>delete</i>
          </div>
        : null
      }
    </div>
  </div>
}

AnswerItem.contextTypes = {
  handles: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default AnswerItem
