import { pushInPayload } from 'core'
import { ANSWER, SUCCESS, CREATE, UPDATE, EDIT } from 'core/constants'

export default (state, action) => {
  switch (action.type ^ ANSWER + SUCCESS) {
    case CREATE:
      return pushInPayload(state, {
        answers: [...state.payload.answers, action.payload]
      })
    case UPDATE:
      return pushInPayload(state, {
        answers: state.payload.answers.map(answer =>
        answer.id === action.payload.id ? action.payload : answer)
      })
    case EDIT:
      return pushInPayload(state, {
        answers: state.payload.answers.map(answer =>
          answer.id === action.id ? { ...answer, edit: !answer.edit }
         : { ...answer, edit: false })
      })
    default:
  }
}
