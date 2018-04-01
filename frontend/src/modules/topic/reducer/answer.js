import { pushInPayload } from 'core'
import { ANSWERS, SUCCESS, CREATE, UPDATE, EDIT, DESTROY, BEST } from 'core/constants'

export default (state, action) => {
  switch (action.type ^ ANSWERS + SUCCESS) {
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
         : { ...answer, edit: false }),
        anyEdit: !state.payload.anyEdit 
      })
    case DESTROY:
      return pushInPayload(state, {
         answers: state.payload.answers.filter(answer =>
           answer.id !== action.payload.answer.id
         )
       })
    case BEST:
      return pushInPayload(state, {
        answers: [
          ...state.payload.answers.filter(answer =>
            answer.id === action.payload.answer.id ),
          ...state.payload.answers.filter(answer =>
             answer.id !== action.payload.answer.id)
        ]
      })
    default:
  }
}
