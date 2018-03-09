import { PENDING, SUCCESS, ERROR, QUERY_TYPES } from '../constants'

const initialState = {
  fetching: true,
  data: {},
  errors: null
}

export default (state = initialState, action, actionType) => {
  return action.type & actionType ? {
    ...state,
    ...{
      [PENDING]: () => ({
        fetching: true
      }),
      [SUCCESS]: () => ({
        fetching: false,
        data: action.payload
      }),
      [ERROR]: () => ({
        fetching: false,
        errors: action.errors
      })
    }
    [action.type & QUERY_TYPES]()
  }
  : state
}
