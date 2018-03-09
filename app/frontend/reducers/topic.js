import { PENDING, SUCCESS, ERROR, QUERY_TYPES, ANSWER_REQUEST, GET_TOPIC } from '../constants'
import universalReducer from './universalReducer'


export default (state, action) => {
  if (action.type === ANSWER_REQUEST + SUCCESS) {
    return {
      ...state,
      data: {
        answers: [...state.data.answers, action.payload]
      }
    }
  }
  return universalReducer(state, action, GET_TOPIC)
}
