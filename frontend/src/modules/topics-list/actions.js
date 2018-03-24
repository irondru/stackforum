import { GET, QUESTIONS, INDEX, API_TOPICS_PATH } from 'core/constants'
import { createApiActions } from 'core'

export const getTopics = () =>
  createApiActions(API_TOPICS_PATH, GET, QUESTIONS + INDEX)
