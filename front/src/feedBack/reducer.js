import { PENDING, SUCCESS, FAILURE } from './actionTypes'

const initialState = {
  fetching: '',
  payload: {},
  errors: {}
}

export default (state = initialState, { type, payload, errors } = {}, actionType) =>
  type === actionType ? {
    ...state,
    ...{
      [PENDING]: () => ({
        errors: {},
        fetching: type
      }),
      [SUCCESS]: () => ({
        fetching: 0,
        payload
      }),
      [FAILURE]: () => ({
        fetching: 0,
        errors
      })
    }[type.match(/\[\w+\]/)]()
  }
  : state
