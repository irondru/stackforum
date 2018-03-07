import { GET_TOPIC, REQUEST, SUCCESS, QUERY_TYPES } from '../constants'

const initialState = {
  fetching: false,
  data: {}
}

export default (state = initialState, action) =>
  action.type & GET_TOPIC ? {
    ...state,
    ...{
      [REQUEST]: () => ({
        fetching: true
      }),
      [SUCCESS]: () => ({
        fetching: false,
        data: action.payload
      })
    }
    [action.type & QUERY_TYPES]()
  }
  : state
