import { GET_TOPICS, SUCCESS, PENDING } from '../actions/actionsTypes'

export default function(state = [], action = {}) {
  switch (action.type) {
    case GET_TOPICS + SUCCESS:
      return action.payload
      break;
    case GET_TOPICS + PENDING:
      return state
    default:
      return state
  }
}
