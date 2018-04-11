import { PENDING, SUCCESS, FAILURE } from './actionStatuses'

const initialState = {
  fetching: '',
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
        fetching: '',
        payload
      }),
      [FAILURE]: () => ({
        fetching: '',
        errors
      })
    }[status(type)]()
  }
  : state

export const mountDefaultReducer = actionType =>
  (state, action, _actionType = actionType) =>
    defaultReducer(state, action, _actionType)

export default defaultReducer
