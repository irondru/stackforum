import feedback from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const signIn = user =>
  feedback.post(
    apiConst.SIGN_IN,
    types.USER,
    { user }
  )

export const signUp = user =>
  feedback.post(
    apiConst.SIGN_UP,
    types.USER,
    { user }
  )

export const signOut = () =>
  feedback.destroy(
    apiConst.SIGN_OUT,
    types.USER
  )

export const getUser = () =>
  feedback.get(
    apiConst.PROFILE,
    types.USER
  )
