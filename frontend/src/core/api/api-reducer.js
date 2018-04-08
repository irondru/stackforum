import { PENDING, SUCCESS, ERROR, REQUEST_STATUSES } from 'core/constants'

const initialState = {
  fetching: 0,
  payload: {},
  errors: {}
}

export default (state = initialState, { type, payload, errors } = {}, actionType) =>
  type & actionType ? {
    ...state,
    ...{
      [PENDING]: () => ({
        errors: {},
        fetching: type ^ PENDING
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
