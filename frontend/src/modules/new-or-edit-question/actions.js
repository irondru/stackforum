import { createApiActions } from 'core'
import { API_TOPICS_PATH, GET, POST, PATCH, QUESTIONS } from 'core/constants'

export const initialEditQuestion = id =>
  createApiActions(API_TOPICS_PATH + id, GET, QUESTIONS)

export const newOrUpdateQuestion = (question, id) => {
  id = id || ''
  return createApiActions(API_TOPICS_PATH + id, id === '' ?
    POST : PATCH , QUESTIONS, { question })
}
