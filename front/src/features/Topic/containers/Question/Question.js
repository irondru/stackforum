import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import { CommentItem, CommentNew, Vote }  from '../../containers'
import { AttachmentsList } from '../../components'
import { abilities } from 'features/User'
import { COMMENTABLE } from '../../models'
import { QUESTIONS_EDIT } from 'features/Topics/routes'
import { votableTypes } from '../Vote'

const QuestionItem = ({ title, body, id, score, posted_at, comments, attachments, access, author, user, deleteTopic }) => {

const commentsList = () =>
  comments ? comments.map(comment =>
    comment.edit ?
      <CommentNew
        key={comment.id}
        model={comment}
      />
    : <CommentItem
        key={comment.id}
        {...comment}
      />
  ) : null

  const postText = target => {   //наебуем реакт с <br>
    if (target && body) target.innerHTML = body
  }

  return body ? <div>
    <h1 id="question-title">{title}</h1>
    <div className="post-layout">
     <div className="post-layout-left">
       <img
         height="50"
         alt="avatar"
         className="post-avatar"
         src={author.avatar}
        />
       <Vote votableType={votableTypes.QUESTION} votableId={id} score={score} />
     </div>
     <div className="post-layout-right">
       <div className="post-layout-right-header">
         <span><b>{author.name}</b> {posted_at}</span>
         {
           access ?
           <div className="flex-right">
             <Link to={QUESTIONS_EDIT.replace(':id', id)}>
                 <i className="material-icons">mode_edit</i>
             </Link>
             <i onClick={deleteTopic.bind(null, id)} className="material-icons">delete</i>
           </div>
           : null
         }
       </div>
       <div ref={postText} className="post-text" />
       { commentsList() }
       {
          user.abilities & abilities.CAN_CREATE_COMMENT ?
          <CommentNew model={{ commentableType: COMMENTABLE.QUESTION, commentableId: id }} /> : null
       }
       <AttachmentsList attachments={attachments} />
     </div>
    </div>
  </div>
  : <div />
}

QuestionItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
  score: PropTypes.number,
  posted_at: PropTypes.string,
  comments: PropTypes.array,
  attachments: PropTypes.array,
  access: PropTypes.bool,
  author: PropTypes.object
}

const mapStateToProps = state => ({
  user: state.user.payload
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.topic
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(QuestionItem)
