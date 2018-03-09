import createApiActions from './createApiActions'
import { USER_QUERY, API_SIGN_IN_PATH, API_SIGN_OUT_PATH, API_PROFILE_PATH,
   POST, GET, DELETE } from '../constants'

export const signIn = user =>
  createApiActions(API_SIGN_IN_PATH, POST, USER_QUERY, { user })

export const signOut = () =>
  createApiActions(API_SIGN_OUT_PATH, DELETE, USER_QUERY)

export const getProfile = () =>
  createApiActions(API_PROFILE_PATH, GET, USER_QUERY)
