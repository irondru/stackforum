import { createApiActions } from 'core'
import { GET, PATCH, POST, CREATE, UPDATE, SUCCESS, API_ANSWER_CREATE_PATH,
  ANSWER_REQUEST, API_TOPICS_PATH, API_ANSWERS_PATH, EDIT, GET_TOPIC } from 'core/constants'

export const createAnswer = (answer, questionId) =>
  createApiActions(API_ANSWER_CREATE_PATH.replace('{questionId}', questionId),
    POST, ANSWER_REQUEST + CREATE, { answer })

export const updateAnswer = (answer, id) =>
  createApiActions(API_ANSWERS_PATH + id, PATCH, ANSWER_REQUEST + UPDATE, { answer })

export const editAnswer = id => ({
    type: ANSWER_REQUEST + EDIT + SUCCESS,
    id
  })

export const getTopic = id =>
  createApiActions(API_TOPICS_PATH + id, GET, GET_TOPIC)
