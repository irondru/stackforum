import { PENDING, SUCCESS, FAILURE } from './actionTypes'

const initialState = {
  fetching: '',
  payload: {},
  errors: {}
}

export default (state = initialState, { type, payload, errors } = {}, actionType) => {
  console.log(/@@\w+/.exec(type)[0]);
  return /@@\w+/.exec(type)[0] === actionType ? {
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
    }[/\/\w+/.exec(type)[0]]()
  }
  : state
}
