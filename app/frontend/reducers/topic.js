import { GET_TOPIC, REQUEST, SUCCESS, QUERY_TYPES } from '../constants'

const initialState = {
  fetching: false,
  topic: {}
}

export default function(state = initialState, action) {
  const new_states = {
    [REQUEST]: () =>
      ({
        fetching: true
      }),
    [SUCCESS]: () =>
      ({
        fetching: false,
        topic: action.payload
      })
  }
  if (action.type & GET_TOPIC) return {
    ...state,
    ...new_states[action.type & QUERY_TYPES]()
  }
  return state
}
