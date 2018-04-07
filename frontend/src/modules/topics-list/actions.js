import { GET, QUESTIONS, INDEX, API_TOPICS_PATH, API_SEARCH_PATH } from 'core/constants'
import { createApiActions } from 'core'

export const getTopics = () =>
  createApiActions(API_TOPICS_PATH, GET, QUESTIONS + INDEX)

export const searchTopics = (query) =>
  createApiActions(API_SEARCH_PATH + query, GET, QUESTIONS + INDEX)
