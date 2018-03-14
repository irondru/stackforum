
import { payloadPush } from 'core'
import { COMMENT, SUCCESS, CREATE, UPDATE, EDIT, TYPE_ANSWER, TYPE_QUESTION } from 'core/constants'

export default (state, action) => {

  const setEditComment = comments =>
    comments.map(comment =>
      comment.id === action.id ? {...comment, edit: true} : { ...comment, edit: false })

  switch (action.type ^ COMMENT + SUCCESS) {
    case CREATE:
      return payloadPush(state, {
        [TYPE_ANSWER]: () => ({
          answers: state.payload.answers.map(answer =>
            answer.id === payload.commentable_id ? {
              ...answer,
              comments: [...answer.comments, action.payload.comment]
            } : answer )
        }),
        [TYPE_QUESTION]: () => ({
          question: {
            ...state.payload.question,
            comments: [...state.payload.question.comments, action.payload.comment]
          }
        })
      }[action.payload.commentable_type]())
    case EDIT:
      return payloadPush(state, {
        answers: state.payload.answers.map(answer => ({
          ...answer,
          comments: setEditComment(answer.comments)
        })),
        question: {
          ...state.payload.question,
          comments: setEditComment(state.payload.question.comments)
        }
      })
    case UPDATE:
      return payloadPush(state, {
        [TYPE_ANSWER]: () => ({
          answers: state.payload.answers.map(answer =>
            answer.id === action.payload.commentable_id ? {
              ...answer,
              comments: answer.comments.map(comment =>
                comment.id === action.payload.comment.id ? action.payload.comment : comment)
            } : answer )
        }),
        [TYPE_QUESTION]: () => ({
          question: {
            ...state.payload.question,
            comments: state.payload.question.comments.map(comment =>
              comment.id === action.payload.comment.id ? action.payload.comment : comment)
          }
        })
      }[action.payload.commentable_type]())
  }
}
