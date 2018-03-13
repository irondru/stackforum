import { SUCCESS, ANSWER, EDIT, ACTIONS, GET_TOPIC,
  CREATE, UPDATE, DESTROY, COMMENT } from 'core/constants'
import { apiReducer } from 'core'

export default (state, action) => {

  const payloadPush = (item) => ({
    ...state,
    fetching: 0,
    payload: {
      ...state.payload,
      ...item
    }
  })

  switch (action.type ^ ANSWER + SUCCESS) {
    case CREATE:
      return payloadPush({ answers: [...state.payload.answers, action.payload] })
    case UPDATE:
      return payloadPush({
        answers: state.payload.answers.map(answer =>
        answer.id === action.payload.id ? action.payload : answer)
      })
    case EDIT:
      return payloadPush({
        answers: state.payload.answers.map(answer =>
          answer.id === action.id ? { ...answer, edit: !answer.edit }
           : { ...answer, edit: false })
      })
  }

  switch (action.type ^ COMMENT + SUCCESS) {
    case CREATE:
      return payloadPush({
        "Answer": () => ({
          answers: state.payload.answers.map(answer =>
            answer.id === action.payload.commentable_id ?
              { ...answer, comments: [...answer.comments, action.payload.comment] } : answer )
        }),
        "Question": () => ({
          question: state.payload.question.comments =
            [...state.payload.question.comments, action.payload.comment]
        })
      }[action.payload.commentable_type]())
    case EDIT:
      return payloadPush({
        answers: state.payload.answers.map(answer => ({
          ...answer,
          comments: answer.comments.map(comment =>
          comment.id === action.id ? {...comment, edit: true } : { ...comment, edit: false })
        }))
      })
    case UPDATE:
      return payloadPush({
          "Answer": () => ({
            answers: state.payload.answers.map(answer =>
              answer.id === action.payload.commentable_id ? {
                ...answer,
                comments: answer.comments.map(comment =>
                  comment.id === action.payload.comment.id ? action.payload.comment : comment)
              } : answer )
          }),
          "Question": () => ({
            question: state.payload.question.comments.map(comment =>
              comment.id === action.payload.comment.id ? action.payload.comment : comment)
          })
        }[action.payload.commentable_type]())

  }
  return apiReducer(state, action, GET_TOPIC + ANSWER + COMMENT)
}
