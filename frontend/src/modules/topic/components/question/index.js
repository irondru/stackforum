import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

import { TOPICS_PATH, QUESTIONS, USER_CAN_CREATE_COMMENT, BACKEND_PATH } from 'core/constants'
import { CommentItem, CommentForm, Vote }  from '../../components'
import './style.css'

const QuestionItem = ({ title, body, id, score, posted_at, comments, access, author }, context) => {

  const commentsList = () =>
    comments ? comments.map(comment =>
      comment.edit ? <CommentForm key={comment.id} {...comment} />
        : <CommentItem key={comment.id} {...comment} />
    ) : null

   return body ? <div>
     <h1>{title}</h1>
     <div className="post-layout">
       <div className="post-layout-left">
         <img alt="avatar" className="post-avatar" src={BACKEND_PATH + author.avatar} />
         <Vote votableType={QUESTIONS} votableId={id} score={score} />
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
   : <div />
}

QuestionItem.contextTypes = {
  user: PropTypes.object.isRequired,
  handles: PropTypes.object.isRequired
}

export default QuestionItem
