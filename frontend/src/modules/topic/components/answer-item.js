import React from 'react';
import { CommentItem, CommentForm, Vote } from '../components'
import { ANSWER } from 'core/constants'

export default ({ id, body, comments, score, handles, handleEditAnswer }) => {
  const commentsList = () =>
    comments ? comments.map (comment =>
      !!comment.edit ? <CommentForm key={comment.id} {...comment} {...{handles}} /> :
        <CommentItem key={comment.id} {...comment} {...{handles}} />
    ) : null
  return (
  <div>
    <p>{body}</p>
    <Vote handles={handles} votableType={ANSWER} votableId={id} score={score} />
    <button onClick={handles.editAnswer.bind(null, id)}>Edit</button>
    {commentsList()}
    <CommentForm key={Math.random()} {...{handles}} commentableId={id} commentableType={ANSWER} />
  </div>
 )
}
