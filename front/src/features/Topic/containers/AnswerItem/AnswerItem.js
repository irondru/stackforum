import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { CommentItem, CommentNew, Vote } from '../../containers'
import { AttachmentsList } from '../../components'
import { abilities } from 'features/User'
import { COMMENTABLE } from '../../models'
import * as actions from '../../actions'

const AnswerItem = ({ id, body, comments, score, access, author, posted_at, itsMyTopic, best, attachments,
  user, editAnswer, deleteAnswer, bestAnswer }) => {

  const commentsList = () =>
    comments ? comments.map (comment =>
      !!comment.edit ? <CommentNew key={comment.id} {...comment} /> :
        <CommentItem key={comment.id} {...comment} />
    ) : null

  const postText = target => {   //наебуем реакт с <br>
    if (target && body) target.innerHTML = body
  }

  return <div className="post-layout">
    <div className="post-layout-left">
      <img alt="avatar" className="post-avatar" src={process.env.REACT_APP_BACK_ROOT + author.avatar} />
      <Vote votableType={'answer'} votableId={id} score={score} />
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
        user.abilities & abilities.CAN_CREATE_COMMENT ?
        <CommentNew model={{ commentableType: COMMENTABLE.ANSWER, commentableId: id }} /> : null
      }
      <AttachmentsList attachments={attachments} />
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

const mapDispatchToProps = dispatch => {
  const { editAnswer, bestAnswer, deleteAnswer } = actions.answers
  return bindActionCreators({
    editAnswer,
    bestAnswer,
    deleteAnswer
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerItem)
