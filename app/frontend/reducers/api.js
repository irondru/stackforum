import { PENDING, SUCCESS, ERROR, QUERY_TYPES } from '../constants'

const initialState = {
  fetching: 1,
  data: {},
  errors: null
}

export default (state = initialState, action, actionType) => {
  return action.type & actionType ? {
    ...state,
    ...{
      [PENDING]: () => ({
        fetching: actionType
      }),
      [SUCCESS]: () => ({
        fetching: 0,
        data: action.payload
      }),
      [ERROR]: () => ({
        fetching: 0,
        errors: action.errors
      })
    }
    [action.type & QUERY_TYPES]()
  }
  : state
}
