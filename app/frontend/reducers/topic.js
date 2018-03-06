import { GET_TOPIC, REQUEST, SUCCESS, QUERY_TYPES } from '../constants'

const initialState = {
  fetching: false,
  topic: {}
}

export default function(state = initialState, action) {
  if (action.type & GET_TOPIC) return {
    ...state,
    ...{
      [REQUEST]: () => ({
        fetching: true
      }),
      [SUCCESS]: () => ({
        fetching: false,
        topic: action.payload
      })
    }
    [action.type & QUERY_TYPES]()
  }
  return state
}
