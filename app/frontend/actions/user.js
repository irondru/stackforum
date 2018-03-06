import { post } from '../api'
import { SIGN_IN, API_SIGN_IN_PATH, REQUEST, SUCCESS, FAIL } from '../constants'

export const signIn = loginData => dispatch => {
  dispatch({
    type: SIGN_IN + REQUEST
  })

  post(API_SIGN_IN_PATH, { user: loginData })
}
