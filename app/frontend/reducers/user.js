import { GET_PROFILE, SUCCESS, REQUEST, QUERY_TYPES } from '../constants'

const initialState = {
  fetching: false,
  profile: null
}

export default function(state = initialState, action) {
  return action.type & GET_PROFILE ? {
    ...state,
    ...{
        [REQUEST]: () => ({
        fetching: true
      }),
      [SUCCESS]: () => ({
        fetching: false,
        profile: action.payload
      })
    }
    [action.type & QUERY_TYPES]()
  }
  : state
}
