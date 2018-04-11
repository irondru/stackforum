import feedback from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'
import * as methods from 'const/methods'

export const signIn = user =>
  feedback.actions(apiConst.SIGN_IN, methods.POST, types.USER, { user })

export const signUp = user =>
  feedback.actions(apiConst.SIGN_UP, methods.POST, types.USER, { user })

export const signOut = () =>
  feedback.actions(apiConst.SIGN_OUT, methods.DELETE, types.USER)

export const getUser = () =>
  feedback.actions(apiConst.PROFILE, methods.GET, types.USER)
