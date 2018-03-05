import { GET_TOPICS, SUCCESS } from '../constants'

export default function(state = [], action = {}) {
  switch (action.type) {
    case GET_TOPICS:
      return action.payload
      break;
    default:
      return state
  }
}
