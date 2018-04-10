import feedback from 'feedback'
import * as apiPathes from './apiPathes'
import * as types from './actionTypes'
import * as methods from 'const/methods'

export const signIn = user =>
  feedback.actions(apiPathes.SIGN_IN, methods.POST, types.USER, { user })

export const signUp = user =>
  feedback.actions(apiPathes.SIGN_UP, methods.POST, types.USER, { user })

export const signOut = () =>
  feedback.actions(apiPathes.SIGN_OUT, methods.DELETE, types.USER)

export const getUser = () =>
  feedback.actions(apiPathes.PROFILE, methods.GET, types.USER)
