import * as types from './actionTypes'

const initialState = {
  fetching: '',
  payload: {},
  errors: {}
}

const defaultReducer = (state = initialState, { type, payload, errors } = {}, actionType) => {
  return /@@\w+/.exec(type)[0] === actionType ? {
    ...state,
    ...{
      [types.PENDING]: () => ({
        errors: {},
        fetching: type
      }),
      [types.SUCCESS]: () => ({
        fetching: 0,
        payload
      }),
      [types.FAILURE]: () => ({
        fetching: 0,
        errors
      })
    }[/\/\w+/.exec(type)[0]]()
  }
  : state
}

export const mountDefaultReducer = actionType =>
  (state, action, _actionType = actionType) =>
    defaultReducer(state, action, _actionType)

export default defaultReducer
