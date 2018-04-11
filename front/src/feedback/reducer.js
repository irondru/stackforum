import { PENDING, SUCCESS, FAILURE } from './actionStatuses'

const initialState = {
  fetching: null,
  payload: {},
  errors: {}
}

const action = type => /@@\w+/.exec(type)[0]
const status = type => /\/\w+/.exec(type)[0]

const defaultReducer = (state = initialState, { type, payload, errors } = {}, actionType) =>
  action(type) === actionType ? {
    ...state,
    ...{
      [PENDING]: () => ({
        errors: {},
        fetching: action(type)
      }),
      [SUCCESS]: () => ({
        fetching: null,
        payload
      }),
      [FAILURE]: () => ({
        fetching: null,
        errors
      })
    }[status(type)]()
  }
  : state

export const mountDefaultReducer = actionType =>
  (state, action, _actionType = actionType) =>
    defaultReducer(state, action, _actionType)

export default defaultReducer
