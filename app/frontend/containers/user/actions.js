import { createApiActions } from 'core'
import { GET, POST, DELETE, USER_REQUEST, API_PROFILE_PATH, API_SIGN_IN_PATH,
  API_SIGN_OUT_PATH } from 'constants'

export const signIn = user =>
  createApiActions(API_SIGN_IN_PATH, POST, USER_REQUEST, { user })

export const signOut = () =>
  createApiActions(API_SIGN_OUT_PATH, DELETE, USER_REQUEST)

export const getProfile = () =>
  createApiActions(API_PROFILE_PATH, GET, USER_REQUEST)
