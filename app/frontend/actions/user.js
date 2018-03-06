import { post, destroy, getJSON } from '../api'
import { SIGN_IN, SIGN_OUT, API_SIGN_IN_PATH, API_SIGN_OUT_PATH, API_PROFILE_PATH,
  GET_PROFILE, REQUEST, SUCCESS, FAIL } from '../constants'

export const signIn = loginData => dispatch => {
  dispatch({
    type: SIGN_IN + REQUEST
  })

  post(API_SIGN_IN_PATH, { user: loginData })
}

export const signOut = () => dispatch => {
  dispatch({
    type: SIGN_OUT + REQUEST
  })

  destroy(API_SIGN_OUT_PATH)

}

export const getProfile = () => dispatch => {
  dispatch({
    type: GET_PROFILE + REQUEST
  })

  getJSON(API_PROFILE_PATH)
    .then(payload => {
      dispatch({
        type: GET_PROFILE + SUCCESS,
        payload
      })
    })
}
