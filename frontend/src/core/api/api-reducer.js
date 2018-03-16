import { PENDING, SUCCESS, ERROR, REQUEST_STATUSES } from 'core/constants'

const initialState = {
  fetching: 1,
  payload: {},
  errors: null
}

export default (state = initialState, { type, payload, errors } = {}, actionType) =>
  type & actionType ? {
    ...state,
    ...{
      [PENDING]: () => ({
        fetching: actionType
      }),
      [SUCCESS]: () => ({
        fetching: 0,
        payload
      }),
      [ERROR]: () => ({
        fetching: 0,
        errors
      })
    }[type & REQUEST_STATUSES]()
  }
  : state
