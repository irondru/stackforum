import { pushInPayload } from 'features/helpers'
import { getStatus, getAction, statuses } from 'feedback'
import * as types from '../actionTypes'

export default (state, action) => {
  if (getStatus(action.type) === statuses.SUCCESS)
    switch (getAction(action.type)) {
      case types.ANSWERS_CREATE:
        return pushInPayload(state, {
          answers: [...state.payload.answers, action.payload]
        })
      case types.ANSWERS_UPDATE:
        return pushInPayload(state, {
          answers: state.payload.answers.map(answer =>
          answer.id === action.payload.id ? action.payload : answer),
          anyEdit: false
        })
      case types.ANSWERS_EDIT:
        return pushInPayload(state, {
          answers: state.payload.answers.map(answer =>
            answer.id === action.id ? { ...answer, edit: !answer.edit }
           : { ...answer, edit: false }),
          anyEdit: !state.payload.anyEdit
        })
      case types.ANSWERS_DESTROY:
        return pushInPayload(state, {
           answers: state.payload.answers.filter(answer =>
             answer.id !== action.payload.answer.id
           )
         })
      case types.ANSWERS_BEST:
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
