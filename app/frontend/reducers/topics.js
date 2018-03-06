import { GET_TOPICS, SUCCESS, REQUEST, QUERY_TYPES } from '../constants'

const initialState = {
  fetching: false,
  topics: []
}

export default (state = initialState, action) =>
  action.type & GET_TOPICS ? {
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
  : state
