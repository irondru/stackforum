import { GET_TOPIC } from '../actions/actionsTypes'

export default function(state = {}, action) {
  switch (action.type) {
    case GET_TOPIC:
      return action.payload
      break;
    default:
      return state
  }
}
