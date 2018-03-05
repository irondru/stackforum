import { GET_TOPIC, REQUEST, SUCCESS } from '../constants'

const initialState = {
  fetching: false,
  topic: {},
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TOPIC + REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case GET_TOPIC + SUCCESS:
      return {
        ...state,
        fetching: false,
        topic: action.payload
      }
    default:
      return state
  }
}
