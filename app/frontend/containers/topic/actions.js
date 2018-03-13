import { createApiActions } from 'core'
import { GET, PATCH, POST, CREATE, UPDATE, SUCCESS, API_ANSWER_CREATE_PATH,
  ANSWER, QUESTION, COMMENT, API_TOPICS_PATH, API_ANSWERS_PATH, EDIT, GET_TOPIC,
  API_COMMENTS_CREATE_ANSWER_PATH, ID, API_COMMENTS_CREATE_QUESTION_PATH} from 'core/constants'

export const createAnswer = (answer, questionId) =>
  createApiActions(API_ANSWER_CREATE_PATH.replace('{questionId}', questionId),
    POST, ANSWER + CREATE, { answer })

export const updateAnswer = (answer, id) =>
  createApiActions(API_ANSWERS_PATH + id, PATCH, ANSWER + UPDATE, { answer })

export const editAnswer = id => ({
    type: ANSWER + EDIT + SUCCESS,
    id
  })

export const editComment = id => ({
  type: COMMENT + EDIT + SUCCESS,
  id
})

export const getTopic = id =>
  createApiActions(API_TOPICS_PATH + id, GET, GET_TOPIC)

export const createComment = (comment, commentableType, commentableId) =>
  createApiActions({
      [ANSWER]: () => API_COMMENTS_CREATE_ANSWER_PATH.replace(ID, commentableId),
      [QUESTION]: () => API_COMMENTS_CREATE_QUESTION_PATH.replace(ID, commentableId)
    }[commentableType](), POST, COMMENT + CREATE, { comment })
