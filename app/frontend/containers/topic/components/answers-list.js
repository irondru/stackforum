import React from 'react'
import AnswerForm from './answer-form'
import AnswerItem from './answer-item'
import CommentForm from './comment-form'
import CommentItem from './comment-item'

export default ({ editAnswer, createAnswer, updateAnswer, answers, question }) => {

  const handleEditAnswer = id => {
    editAnswer(id)
  }

  const handleSubmitAnswer = event => {
    event.preventDefault()
    createAnswer(parseForm(event.target), this.props.question.id)
  }

  const handleUpadateAnswer = (event, id) => {
   event.preventDefault()
   updateAnswer(parseForm(event.target), id)
  }

  const handleEditComment = id => {
    editComment(id)
  }

  const handleCreateComment = (event, commentableType) => {
    event.preventDefault()
    createComment(parseForm(event.target), commentableType)
  }

  const handleUpdateComment = (event, commentableType, id) => {
    event.preventDefault()
    updateComment(commentableType, id)
  }

  return (
    <div>
      {answers ? answers.map(answer =>
          <div>
          {
            answer.edit ? <AnswerForm key={answer.id}  {...answer}
              handleSubmit={handleUpadateAnswer}  handleCancelEdit={handleEditAnswer} /> :
              <AnswerItem key={answer.id} {...answer} handleEditAnswer={handleEditAnswer} />
          }{
            answer.comments ? answer.comments.map (comment =>
              comment.edit ? <CommentForm key={comment.id} {...comment}
                handleSubmit={handleUpdateComment} handleCancelEdit={handleEditComment} /> :
                <CommentItem key={comment.id} {...comment} />
            ) : null
         }
         <CommentForm handleSubmit={(event, commentableType = ANSWER) => handleCreateComment(event, commentableType)} />
         </div>
      ) : null}
      <AnswerForm key={Math.random()} handleSubmit={handleSubmitAnswer} />
  </div>
  )
}
