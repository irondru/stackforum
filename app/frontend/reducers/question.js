import { QUERY_QUESTION, REQUEST, SUCCESS, FAIL, QUERY_TYPES } from '../constants'

const initialState = {
  fetching: false,
  id: null,
  msg: ''
}

export default (state = initialState, action) =>
  action.type & QUERY_QUESTION ? {
    ...state,
    ...{
      [REQUEST]: () => ({
        fetching: true
      }),
      [SUCCESS]: () => ({
        fetching: false,
        id: action.payload
      }),
      [FAIL]: () => ({
        fetching: false,
        msg: action.payload
      })
    }
    [action.type & QUERY_TYPES]()
    }
    : state
