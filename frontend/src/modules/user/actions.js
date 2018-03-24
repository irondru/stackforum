import { createApiActions } from 'core'
import { GET, POST, DELETE, USER, API_PROFILE_PATH, API_SIGN_IN_PATH,
  API_SIGN_OUT_PATH, API_SIGN_UP_PATH } from 'core/constants'

export const signIn = user =>
  createApiActions(API_SIGN_IN_PATH, POST, USER, { user })

export const signUp = user =>
  createApiActions(API_SIGN_UP_PATH, POST, USER, { user })

export const signOut = () =>
  createApiActions(API_SIGN_OUT_PATH, DELETE, USER)

export const getUser = () =>
  createApiActions(API_PROFILE_PATH, GET, USER)
