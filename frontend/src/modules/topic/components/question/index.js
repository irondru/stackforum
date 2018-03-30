import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

import { TOPICS_PATH, QUESTIONS, USER_CAN_CREATE_COMMENT } from 'core/constants'
import { CommentItem, CommentForm, Vote }  from '../../components'
import './style.css'

const QuestionItem = ({ title, body, id, score, comments, access }, context) => {

  const commentsList = () =>
    comments ? comments.map(comment =>
      comment.edit ? <CommentForm key={comment.id} {...comment} />
        : <CommentItem key={comment.id} {...comment} />
    ) : null

  return (
    <div>
      <h1>{title}</h1>
      <div className="post-layout">
        <div className="post-layout-left">
          <Vote votableType={QUESTIONS} votableId={id} score={score} />
        </div>
        <div className="post-layout-right">
          <div className="post-text">
            <p>{body}</p>
          </div>
          {commentsList()}
          {
             context.user.abilities & USER_CAN_CREATE_COMMENT ?
             <CommentForm commentableType={QUESTIONS} commentableId={id} /> : null
          }
          {
            access ?
            <div className="flex-right" >
              <Link to={TOPICS_PATH + id + '/edit'}>
                  <i className="material-icons">mode_edit</i>
              </Link>
              <i onClick={context.handles.deleteTopic.bind(null, id)} className="material-icons">delete</i>
            </div>
            : null
          }
        </div>
      </div>
    </div>
  )
}

QuestionItem.contextTypes = {
  user: PropTypes.object.isRequired,
  handles: PropTypes.object.isRequired
}

export default QuestionItem
