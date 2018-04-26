import feedback from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const avatarUpload = avatar =>
  feedback.post(apiConst.AVATAR_UPLOAD, types.USER, { avatar })
