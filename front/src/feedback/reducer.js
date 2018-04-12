import { PENDING, SUCCESS, FAILURE } from './actionStatuses'

const initialState = {
  fetching: null,
  payload: {},
  errors: {}
}

export const getAction = type => /@@\w+/.exec(type)[0]
export const getStatus = type => /\/\w+/.exec(type)[0]

const defaultReducer = (state = initialState, { type, payload, errors } = {}, actionTypes = []) =>
   actionTypes.includes(getAction(type)) ? {
    ...state,
    ...{
      [PENDING]: () => ({
        errors: {},
        fetching: getAction(type)
      }),
      [SUCCESS]: () => ({
        fetching: null,
        payload
      }),
      [FAILURE]: () => ({
        fetching: null,
        errors
      })
    }[getStatus(type)]()
  }
  : state

export const mountDefaultReducer = actionType =>
  (state, action, _actionType = actionType) =>
    defaultReducer(state, action, _actionType)

export default defaultReducer
