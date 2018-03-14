import React from 'react'
import { Link } from 'react-router'
import { TOPICS_PATH, QUESTION } from 'core/constants'
import CommentForm from './comment-form'
import CommentItem from './comment-item'

export default ({ title, body, id, comments, handles}) => {
  const commentsList = () =>
    comments ? comments.map(comment =>
      comment.edit ? <CommentForm key={comment.id} {...comment} {...{handles}} />
      : <CommentItem key={comment.id} {...comment} {...{handles} } />
    ) : null

  return (
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
        {commentsList()}
        <Link to={TOPICS_PATH + id + '/edit'}>Edit</Link>
        <CommentForm {...{handles}} commentableType={QUESTION} commentableId={id} />
      </div>
    )
  }
