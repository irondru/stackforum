import { SUCCESS, ANSWER_REQUEST, EDIT, ACTIONS, GET_TOPIC,
  CREATE, UPDATE, DESTROY } from 'constants'
import { apiReducer } from 'core'

export default (state, action) => {
  switch (action.type ^ ANSWER_REQUEST + SUCCESS) {
    case CREATE:
      return {
        ...state,
        fetching: 0,
        payload: {
          ...state.payload,
          answers: [...state.payload.answers, action.payload]
        }
      }
    case UPDATE:
      return {
        ...state,
        fetching: 0,
        payload: {
          ...state.payload,
          answers: state.payload.answers.map(answer =>
            answer.id === action.payload.id ? action.payload : answer)
        }
      }
    case EDIT:
      return {
        ...state,
        payload: {
          ...state.payload,
          answers: state.payload.answers.map(answer =>
            answer.id === action.id ? { ...answer, edit: !answer.edit }
             : { ...answer, edit: false }
          )
        }
      }
    default:
      return apiReducer(state, action, GET_TOPIC + ANSWER_REQUEST)
  }
}
