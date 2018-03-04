import { GET_TOPICS, SUCCESS, PENDING } from '../actions/actionsTypes'

export default function(state = [], action = {}) {
  switch (action.type) {
    case GET_TOPICS:
      return action.payload
      break;
    default:
      return state
  }
}
