import { post, destroy, getJSON } from '../api'
import { USER_QUERY, API_SIGN_IN_PATH, API_SIGN_OUT_PATH, API_PROFILE_PATH,
  PENDING, SUCCESS, ERROR } from '../constants'

export const signIn = loginData => dispatch => {
  dispatch({
    type: USER_QUERY + PENDING
  })
  post(API_SIGN_IN_PATH, { user: loginData })
    .then(respond => respond.json())
    .then(payload => {
      dispatch({
        type: USER_QUERY + SUCCESS,
        payload
      })
    })
}

export const signOut = () => dispatch => {
  dispatch({
    type: USER_QUERY + PENDING
  })

  destroy(API_SIGN_OUT_PATH)
    .then(responce => {
      if (responce.status == 200)
        dispatch({
          type: USER_QUERY + SUCCESS,
          payload: null
        })
     })
}

export const getProfile = () => dispatch => {
  dispatch({
    type: USER_QUERY + PENDING
  })

  getJSON(API_PROFILE_PATH)
    .then(payload => {
      dispatch({
        type: USER_QUERY + SUCCESS,
        payload
      })
    })
}
