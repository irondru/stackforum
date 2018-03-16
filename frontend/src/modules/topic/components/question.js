import React from 'react'
import { Link } from 'react-router'
import { TOPICS_PATH, QUESTION } from 'core/constants'
import { CommentItem, CommentForm, Vote }  from '../components'
import Upload from './upload-test'

export default ({ title, body, id, score, comments, handles}) => {
  const commentsList = () =>
    comments ? comments.map(comment =>
      comment.edit ? <CommentForm key={comment.id} {...comment} {...{handles}} />
      : <CommentItem key={comment.id} {...comment} {...{handles} } />
    ) : null

  return (
      <div>
        <Upload />
        <h3>{title}</h3>
        <Vote handles={handles} votableType={QUESTION} votableId={id} score={score} />
        <p>{body}</p>
        {commentsList()}
        <Link to={TOPICS_PATH + id + '/edit'}>Edit</Link>
        <CommentForm {...{handles}} commentableType={QUESTION} commentableId={id} />
      </div>
    )
  }
