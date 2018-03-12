import { GET, GET_TOPICS, API_TOPICS_PATH } from 'constants'

export const getTopics = () =>
  createApiActions(API_TOPICS_PATH, GET, GET_TOPICS)
