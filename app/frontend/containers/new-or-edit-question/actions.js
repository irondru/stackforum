import { createApiActions } from 'core'
import { API_TOPICS_PATH, GET, POST, PATCH, QUESTION_REQUEST } from 'core/constants'

export const initialEditQuestion = id =>
  createApiActions(API_TOPICS_PATH + id, GET, QUESTION_REQUEST)

export const newOrUpdateQuestion = (question, id) =>
  createApiActions(API_TOPICS_PATH + id, !!id ? PATCH : POST, QUESTION_REQUEST, { question })
