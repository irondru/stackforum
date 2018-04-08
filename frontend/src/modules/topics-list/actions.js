import { GET, QUESTIONS, INDEX, PAGE, API_TOPICS_PATH, API_TOPICS_PAGES_PATH, API_SEARCH_PATH } from 'core/constants'
import { createApiActions } from 'core'

export const getTopics = (page = 0) =>
  createApiActions(page ? API_TOPICS_PAGES_PATH + page : API_TOPICS_PATH, GET, QUESTIONS + (page ? PAGE : INDEX))

export const searchTopics = (query) =>
  createApiActions(API_SEARCH_PATH + query, GET, QUESTIONS + INDEX)
