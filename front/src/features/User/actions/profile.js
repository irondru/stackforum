import feedback, { methods } from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const avatarUpload = avatar =>
  feedback.actions(apiConst.AVATAR_UPLOAD, methods.POST, types.USER, { avatar })
