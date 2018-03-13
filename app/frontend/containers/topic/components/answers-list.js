import React from 'react'
import AnswerForm from './answer-form'
import AnswerItem from './answer-item'
import CommentForm from './comment-form'
import CommentItem from './comment-item'
import { parseForm } from 'core'

import { ANSWER } from 'core/constants'

export default ({ editAnswer, createAnswer, updateAnswer, createComment,
  editComment, updateComment, answers, question }) => {

  const handleEditAnswer = id => {
    editAnswer(id)
  }

  const handleSubmitAnswer = event => {
    event.preventDefault()
    createAnswer(parseForm(event.target), question.id)
  }

  const handleUpadateAnswer = (event, id) => {
   event.preventDefault()
   updateAnswer(parseForm(event.target), id)
  }

  const handleEditComment = id => {
    editComment(id)
  }

  const handleCreateComment = (event, commentableId) => {
    event.preventDefault()
    createComment(parseForm(event.target), ANSWER, commentableId)
  }

  const handleUpdateComment = (event, commentableId, id) => {
    event.preventDefault()
    updateComment(parseForm(event.target), id)
  }

  return (
    <div>
      {answers ? answers.map((answer, id) =>
          <div>
          {
            answer.edit ? <AnswerForm key={answer.id}  {...answer}
              handleSubmit={handleUpadateAnswer}  handleCancelEdit={handleEditAnswer} /> :
              <AnswerItem key={answer.id} {...answer} handleEditAnswer={handleEditAnswer} />
          }{
            answer.comments ? answer.comments.map (comment =>
              !!comment.edit ? <CommentForm key={comment.id} {...comment}
                handleSubmit={handleUpdateComment} handleCancelEdit={handleEditComment} /> :
                <CommentItem key={comment.id} {...comment} handleEdit={handleEditComment} />
            ) : null
         }
         <CommentForm key={Math.random()} handleSubmit={handleCreateComment} commentableId={answer.id} />
         </div>
      ) : null}
      <AnswerForm key={Math.random()} handleSubmit={handleSubmitAnswer} />
  </div>
  )
}
