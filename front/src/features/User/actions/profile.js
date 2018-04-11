import feedback from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'
import * as methods from 'const/methods'

export const avatarUpload = avatar =>
  feedback.actions(apiConst.AVATAR_UPLOAD, methods.POST, types.USER, { avatar })
