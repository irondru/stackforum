import { QUERY_QUESTION, REQUEST, SUCCESS, FAIL, QUERY_TYPES } from '../constants'

const initialState = {
  fetching: false,
  question: {
    id: null
  },
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
        question: action.payload
      }),
      [FAIL]: () => ({
        fetching: false,
        msg: action.payload
      })
    }
    [action.type & QUERY_TYPES]()
    }
    : state
