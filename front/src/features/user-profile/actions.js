import { createApiActions } from 'core'
import { API_AVATAR_UPLOAD_PATH, POST, USER } from 'core/constants'

export const avatarUpload = avatar =>
  createApiActions(API_AVATAR_UPLOAD_PATH, POST, USER, { avatar })
