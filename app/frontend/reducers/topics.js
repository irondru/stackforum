import { GET_TOPICS, SUCCESS, REQUEST, QUERY_TYPES } from '../constants'

const initialState = {
  fetching: false,
  topics: []
}

export default function(state = initialState, action) {
  if (action.type & GET_TOPICS) return {
    ...state,
    ...{
      [REQUEST]: () => ({
        fetching: true
      }),
      [SUCCESS]: () => ({
        fetching: false,
        topics: action.payload
      })
    }
    [action.type & QUERY_TYPES]()
  }
  return state
}
