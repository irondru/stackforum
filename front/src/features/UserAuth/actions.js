import feedBackActions from '../../feedBack/actions'
import { POST, DELETE, API_SIGN_IN_PATH,
  API_SIGN_OUT_PATH, API_SIGN_UP_PATH, API_PROFILE_PATH, GET } from '../../constants'

import * as types from './actionTypes'

export const signIn = user =>
  feedBackActions(API_SIGN_IN_PATH, POST, types.USER, { user })

export const signUp = user =>
  feedBackActions(API_SIGN_UP_PATH, POST, types.USER, { user })

export const signOut = () =>
  feedBackActions(API_SIGN_OUT_PATH, DELETE, types.USER)

export const getUser = () =>
  feedBackActions(API_PROFILE_PATH, GET, types.USER)
