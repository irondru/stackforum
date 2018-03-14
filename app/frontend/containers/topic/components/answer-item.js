import React from 'react';
import CommentItem from './comment-item'
import CommentForm from './comment-form'
import { ANSWER } from 'core/constants'

export default ({ id, body, comments, handles, handleEditAnswer }) => {
  const commentsList = () =>
    comments ? comments.map (comment =>
      !!comment.edit ? <CommentForm key={comment.id} {...comment} {...{handles}} /> :
        <CommentItem key={comment.id} {...comment} {...{handles}} />
    ) : null
  return (
  <div>
    <p>{body}</p>
    <button onClick={handles.editAnswer.bind(null, id)}>Edit</button>
    {commentsList()}
    <CommentForm key={Math.random()} {...{handles}} commentableId={id} commentableType={ANSWER} />
  </div>
 )
}
