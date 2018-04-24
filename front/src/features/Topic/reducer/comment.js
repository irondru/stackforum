import { pushInPayload } from 'features/utils'
import { getStatus, getAction, statuses } from 'feedback'
import * as types from '../actionTypes'
import { COMMENTABLE } from '../models'

export default (state, action) => {

  const setEditComment = comments =>
    comments.map(comment =>
      comment.id === action.id ? {...comment, edit: !comment.edit} : { ...comment, edit: false })
  if (getStatus(action.type) === statuses.SUCCESS)
    switch (getAction(action.type)) {
      case types.COMMENTS_CREATE:
        return pushInPayload(state, {
          [COMMENTABLE.ANSWER]: () => ({
            answers: state.payload.answers.map(answer =>
              answer.id === action.payload.commentable_id ? {
                ...answer,
                comments: [...answer.comments, action.payload.comment]
              } : answer )
          }),
          [COMMENTABLE.QUESTION]: () => ({
            question: {
              ...state.payload.question,
              comments: [...state.payload.question.comments, action.payload.comment]
            }
          })
        }[action.payload.commentable_type]())
      case types.COMMENTS_EDIT:
        return pushInPayload(state, {
          answers: state.payload.answers.map(answer => ({
            ...answer,
            comments: setEditComment(answer.comments)
          })),
          question: {
            ...state.payload.question,
            comments: setEditComment(state.payload.question.comments)
          }
        })
      case types.COMMENTS_UPDATE:
        return pushInPayload(state, {
          [COMMENTABLE.ANSWER]: () => ({
            answers: state.payload.answers.map(answer =>
              answer.id === action.payload.commentable_id ? {
                ...answer,
                comments: answer.comments.map(comment =>
                  comment.id === action.payload.comment.id ? action.payload.comment : comment)
              } : answer )
          }),
          [COMMENTABLE.QUESTION]: () => ({
            question: {
              ...state.payload.question,
              comments: state.payload.question.comments.map(comment =>
                comment.id === action.payload.comment.id ? action.payload.comment : comment)
            }
          })
        }[action.payload.commentable_type]())
      case types.COMMENTS_DESTROY:
        return pushInPayload(state, {
          [COMMENTABLE.ANSWER]: () => ({
            answers: state.payload.answers.map(answer =>
              answer.id === action.payload.commentable_id ? {
                ...answer,
                comments: answer.comments.filter(comment =>
                  comment.id !== action.payload.comment.id
                )
              } : answer)
          }),
          [COMMENTABLE.QUESTION]: () => ({
            question: {
              ...state.payload.question,
              comments: state.payload.question.comments.filter(comment =>
                comment.id !== action.payload.comment.id
              )
            }
          })
        }[action.payload.commentable_type]())
      default:
    }
}
