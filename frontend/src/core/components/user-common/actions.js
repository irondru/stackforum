import { API_PROFILE_PATH, GET, USER } from 'core/constants'
import { createApiActions } from 'core'

export const getUser = () =>
  createApiActions(API_PROFILE_PATH, GET, USER)
