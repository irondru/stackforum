import React from 'react';
import { CommentItem, CommentForm, Vote, Attachments } from '../../components'
import { ANSWERS, USER_CAN_CREATE_COMMENT, BACKEND_PATH } from 'core/constants'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../../actions'
import './style.css'

const AnswerItem = ({ id, body, comments, score, access, author, posted_at, itsMyTopic, best, attachments,
  user, editAnswer, deleteAnswer, bestAnswer }) => {

  const commentsList = () =>
    comments ? comments.map (comment =>
      !!comment.edit ? <CommentForm key={comment.id} {...comment} /> :
        <CommentItem key={comment.id} {...comment} />
    ) : null

  const postText = target => {   //наебуем реакт с <br>
    if (target && body) target.innerHTML = body
  }

  return <div className="post-layout">
    <div className="post-layout-left">
      <img alt="avatar" className="post-avatar" src={BACKEND_PATH + author.avatar} />
      <Vote votableType={ANSWERS} votableId={id} score={score} />
      {
        itsMyTopic ?
          <i className={`material-icons ${best ? 'best-answer' : null}`}
            onClick={bestAnswer.bind(null, id)}>done</i>
        : best ? <i className="material-icons best-answer">done</i> : null
      }
    </div>
    <div className="post-layout-right">
      <div className="post-layout-right-header">
        <span><b>{author.name}</b> {posted_at}</span>
        {
          access ?
            <div className="flex-right">
              <i className="material-icons" onClick={editAnswer.bind(null, id)}>mode_edit</i>
              <i className="material-icons" onClick={deleteAnswer.bind(null, id)}>delete</i>
            </div>
          : null
        }
      </div>
      <div ref={postText} className="post-text" />
      { commentsList() }
      {
        user.abilities & USER_CAN_CREATE_COMMENT ?
        <CommentForm commentableId={id} commentableType={ANSWERS} /> : null
      }
      <Attachments attachments={attachments} />
    </div>
  </div>
}

AnswerItem.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  access: PropTypes.bool.isRequired,
  author: PropTypes.object.isRequired,
  posted_at: PropTypes.string.isRequired,
  itsMyTopic: PropTypes.bool,
  best: PropTypes.bool,
  attachments: PropTypes.array,
  comments: PropTypes.array
}

const mapStateToProps = state => ({
  user: state.user.payload
})

const mapDispatchToProps = dispatch => ({
  editAnswer: id => dispatch(actions.editAnswer(id)),
  bestAnswer: id => dispatch(actions.bestAnswer(id)),
  deleteAnswer: id => dispatch(actions.deleteAnswer(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerItem)
